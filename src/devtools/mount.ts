/// <reference lib="dom" />
import type { Kweri } from '../kweri/index.js'
import { PACKAGE_VERSION } from '../version.js';
import { isFresh } from '../cache/index.js';
import type { MountKweriDevToolsOptions } from './options.js';
import { devtoolsCss } from './styles.js';
import { ICON_LAYERS, ICON_DB } from './icons.js';
import {
  collectRowKeys,
  entryForKey,
  observerCountFor,
  parseQueryKey,
  relativeTime,
  methodPillClass
} from './helpers.js';
import { buildEntryDetail } from './json-tree.js';

/**
 * Mount a floating devtools panel for inspecting kweri query cache, observers, and in-flight fetches.
 * Framework-agnostic (vanilla DOM). Returns an unmount function.
 */
export function mountKweriDevTools(
  kweri: Kweri,
  options?: MountKweriDevToolsOptions
): () => void {
  if (typeof document === 'undefined') {
    return () => {};
  }

  // UI state - declare early since used in DOM creation
  let activeTab: string = 'QUERIES';
  let searchTerm: string = '';
  let eventLog: Array<{
    timestamp: number;
    type: string;
    key: string;
    details: string;
  }> = [];

  /** Avoid full DOM rebuild while user scrolls (poll/cache would flash before rAF restore). */
  let isUserScrolling = false;
  /** DOM `setTimeout` id (avoid Node `Timeout` typing clash in dual lib setups). */
  let scrollQuietTimer: number | undefined;
  let pendingRenderWhileScrolling = false;

  const position = options?.position ?? 'bottom-right';
  const host = document.createElement('div');
  host.setAttribute('data-kweri-devtools', '');
  const shadow = host.attachShadow({ mode: 'open' });
  const styleEl = document.createElement('style');
  styleEl.textContent = devtoolsCss;
  const wrap = document.createElement('div');
  wrap.className = `wrap ${position === 'bottom-left' ? 'bl' : 'br'}`;

  const panel = document.createElement('div');
  panel.className = 'panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'kweri query cache');
  panel.setAttribute('aria-hidden', 'true');

  const head = document.createElement('div');
  head.className = 'head';
  const headTop = document.createElement('div');
  headTop.className = 'head-top';

  const brand = document.createElement('div');
  brand.className = 'brand';
  const mark = document.createElement('span');
  mark.className = 'brand-mark';
  mark.innerHTML = ICON_DB;
  const titles = document.createElement('div');
  titles.className = 'head-titles';
  const title = document.createElement('h2');
  title.className = 'console-title';
  title.innerHTML = `KWERI_CONSOLE <span class="version">${PACKAGE_VERSION}</span>`;
  titles.append(title);
  brand.append(mark, titles);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close';
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close devtools');
  closeBtn.textContent = '×';

  headTop.append(brand, closeBtn);

  // Navigation tabs
  const navTabs = document.createElement('div');
  navTabs.className = 'nav-tabs';

  const tabs = ['QUERIES', 'NETWORK', 'EVENTS', 'SETTINGS'];
  tabs.forEach((tabName, index) => {
    const tab = document.createElement('button');
    tab.className = `nav-tab${tabName === activeTab ? ' active' : ''}`;
    tab.textContent = tabName;
    tab.addEventListener('click', () => {
      activeTab = tabName;
      navTabs
        .querySelectorAll('.nav-tab')
        .forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      updateSearchPlaceholder();
      requestRender();
    });
    navTabs.append(tab);
  });

  // Controls section with search and global actions
  const controls = document.createElement('div');
  controls.className = 'controls';

  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';

  const searchIcon = document.createElement('span');
  searchIcon.className = 'search-icon';
  searchIcon.textContent = '🔍';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.className = 'search-input';
  searchInput.placeholder = 'Filter by method, path, or key...';
  searchInput.addEventListener('input', (e) => {
    searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
    requestRender();
  });

  const clearButton = document.createElement('button');
  clearButton.className = 'search-clear';
  clearButton.textContent = '×';
  clearButton.title = 'Clear search';
  clearButton.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    requestRender();
  });

  // Update placeholder based on active tab
  const updateSearchPlaceholder = () => {
    switch (activeTab) {
      case 'QUERIES':
        searchInput.placeholder = 'Filter by method, path, or key...';
        break;
      case 'NETWORK':
        searchInput.placeholder = 'Filter network requests...';
        break;
      case 'EVENTS':
        searchInput.placeholder = 'Filter events by type or key...';
        break;
      default:
        searchInput.placeholder = 'Search...';
    }
  };

  searchContainer.append(searchIcon, searchInput, clearButton);
  updateSearchPlaceholder(); // Set initial placeholder

  const globalActionBtn = document.createElement('button');
  globalActionBtn.className = 'global-action-btn';
  globalActionBtn.textContent = 'INVALIDATE_ALL';
  globalActionBtn.addEventListener('click', () => {
    kweri.invalidateByPath(/.*/);
    eventLog.unshift({
      timestamp: Date.now(),
      type: 'INVALIDATE_ALL',
      key: '*',
      details: 'All cache entries invalidated'
    });
    requestRender();
  });

  controls.append(searchContainer, globalActionBtn);

  const stats = document.createElement('div');
  stats.className = 'stats';
  head.append(headTop, navTabs, controls, stats);

  const contentArea = document.createElement('div');
  contentArea.className = 'content-area';

  // Footer with stats
  const footer = document.createElement('div');
  footer.className = 'footer';

  const footerLeft = document.createElement('div');
  footerLeft.className = 'footer-left';

  const footerRight = document.createElement('div');
  footerRight.className = 'footer-right';

  const systemStatus = document.createElement('span');
  systemStatus.className = 'system-status';
  systemStatus.textContent = 'SYSTEM_ONLINE';

  footerRight.append(systemStatus);
  footer.append(footerLeft, footerRight);

  panel.append(head, contentArea, footer);

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'toggle';
  toggle.innerHTML = `${ICON_LAYERS}<span class="toggle-label">DEV</span>`;
  toggle.setAttribute('aria-label', 'Open kweri query devtools');
  toggle.setAttribute('aria-expanded', 'false');

  wrap.append(panel, toggle);
  shadow.append(styleEl, wrap);
  document.body.appendChild(host);

  let open = false;
  let expandedKey: string | null = null;
  /** Paths (JSON-pointer-like under `$`) the user collapsed; survives poll/render. */
  const jsonCollapsedPaths = new Set<string>();
  let prevExpandedRowKey: string | null = null;

  const flushScrollQuiet = () => {
    scrollQuietTimer = undefined;
    isUserScrolling = false;
    if (pendingRenderWhileScrolling && open) {
      pendingRenderWhileScrolling = false;
      render();
    }
  };

  let isRestoringScroll = false;

  const bumpScrollActivity = () => {
    // Don't treat programmatic scroll restoration as user scrolling
    if (isRestoringScroll) return;
    
    isUserScrolling = true;
    window.clearTimeout(scrollQuietTimer);
    scrollQuietTimer = window.setTimeout(flushScrollQuiet, 160);
  };

  contentArea.addEventListener('scroll', bumpScrollActivity, { passive: true });

  const setOpen = (v: boolean) => {
    open = v;
    panel.classList.toggle('open', v);
    panel.setAttribute('aria-hidden', v ? 'false' : 'true');
    toggle.setAttribute('aria-expanded', v ? 'true' : 'false');
    toggle.setAttribute(
      'aria-label',
      v ? 'Close kweri query devtools' : 'Open kweri query devtools'
    );
    if (v) render();
  };

  toggle.addEventListener('click', () => setOpen(!open));
  closeBtn.addEventListener('click', () => setOpen(false));

  const filterKeys = (keys: string[], search: string) => {
    if (!search.trim()) return keys;
    return keys.filter((key) => {
      const { method, path } = parseQueryKey(key);
      return (
        method.toLowerCase().includes(search) ||
        path.toLowerCase().includes(search) ||
        key.toLowerCase().includes(search)
      );
    });
  };

  const renderQueriesTab = (snap: any, filteredKeys: string[], savedScrolls: { table: number, detail: number }) => {
    const tableWrap = document.createElement('div');
    tableWrap.className = 'table-wrap';
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML = `
      <tr>
        <th scope="col">Method</th>
        <th scope="col">Path</th>
        <th scope="col">Status</th>
        <th scope="col" title="Active observers">Obs.</th>
        <th scope="col" title="In-flight fetch">Net</th>
        <th scope="col" title="Fresh or stale (success only)">Fresh</th>
        <th scope="col">Updated</th>
        <th scope="col"><span class="sr-only">Actions</span></th>
      </tr>`;
    const tbody = document.createElement('tbody');
    table.append(thead, tbody);
    tableWrap.append(table);


    for (const key of filteredKeys) {
      const entry = entryForKey(snap, key);
      const obs = observerCountFor(snap, key);
      const flight = snap.inFlight.includes(key);
      const { method, path, params } = parseQueryKey(key);
      const status = entry?.status ?? 'idle';
      const fresh = entry ? isFresh(entry) : false;

      const tr = document.createElement('tr');
      if (expandedKey === key) tr.classList.add('row-expanded');

      const tdMethod = document.createElement('td');
      const pill = document.createElement('span');
      pill.className = `method-pill ${methodPillClass(method)}`;
      pill.textContent = method;
      tdMethod.append(pill);

      const tdPath = document.createElement('td');
      tdPath.className = 'mono';
      tdPath.textContent = path;

      const tdStatus = document.createElement('td');
      const sb = document.createElement('span');
      sb.className = `badge ${status}`;
      sb.textContent = status;
      tdStatus.append(sb);

      const tdObs = document.createElement('td');
      tdObs.textContent = String(obs);

      const tdFlight = document.createElement('td');
      const flightDot = document.createElement('span');
      flightDot.className = `flight-dot${flight ? ' on' : ''}`;
      flightDot.title = flight ? 'In flight' : 'Not in flight';
      flightDot.setAttribute(
        'aria-label',
        flight ? 'In flight' : 'Not in flight'
      );
      tdFlight.append(flightDot);

      const tdFresh = document.createElement('td');
      if (entry && entry.status === 'success') {
        const fb = document.createElement('span');
        fb.className = `badge ${fresh ? 'fresh' : 'stale'}`;
        fb.textContent = fresh ? 'fresh' : 'stale';
        tdFresh.append(fb);
      } else {
        tdFresh.textContent = '—';
      }

      const tdUpd = document.createElement('td');
      tdUpd.className = 'mono';
      tdUpd.textContent = relativeTime(entry?.updatedAt ?? 0);

      const tdAct = document.createElement('td');
      const btnRow = document.createElement('div');
      btnRow.className = 'btn-row';

      const inv = document.createElement('button');
      inv.type = 'button';
      inv.className = 'btn';
      inv.textContent = 'Invalidate';
      inv.addEventListener('click', (e: MouseEvent) => {
        e.stopPropagation();
        kweri.invalidateQueryByKey(key);
        eventLog.unshift({
          timestamp: Date.now(),
          type: 'INVALIDATE',
          key,
          details: `Query invalidated manually`
        });
        requestRender();
      });

      const rem = document.createElement('button');
      rem.type = 'button';
      rem.className = 'btn danger';
      rem.textContent = 'Remove';
      rem.addEventListener('click', (e: MouseEvent) => {
        e.stopPropagation();
        kweri.removeQueryByKey(key);
        if (expandedKey === key) expandedKey = null;
        eventLog.unshift({
          timestamp: Date.now(),
          type: 'REMOVE',
          key,
          details: `Cache entry removed manually`
        });
        requestRender();
      });

      btnRow.append(inv, rem);
      tdAct.append(btnRow);

      tr.append(
        tdMethod,
        tdPath,
        tdStatus,
        tdObs,
        tdFlight,
        tdFresh,
        tdUpd,
        tdAct
      );
      tr.style.cursor = 'pointer';
      tr.addEventListener('click', () => {
        expandedKey = expandedKey === key ? null : key;
        requestRender();
      });

      tbody.append(tr);

      if (expandedKey === key) {
        const detailTr = document.createElement('tr');
        detailTr.classList.add('row-expanded');
        const detailTd = document.createElement('td');
        detailTd.colSpan = 8;
        const detail = document.createElement('div');
        detail.className = 'detail';
        detail.addEventListener('scroll', bumpScrollActivity, {
          passive: true
        });
        detail.append(buildEntryDetail(key, params, entry, jsonCollapsedPaths));
        detailTd.append(detail);
        detailTr.append(detailTd);
        tbody.append(detailTr);
      }
    }

    if (filteredKeys.length === 0) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 8;
      const empty = document.createElement('div');
      empty.className = 'empty';
      const strong = document.createElement('strong');
      strong.textContent = searchTerm
        ? 'No matching queries'
        : 'No cached queries';
      const sub = document.createElement('span');
      sub.textContent = searchTerm
        ? `No queries match "${searchTerm}". Try a different search term.`
        : 'Run a query from your app to see keys, status, and observers here.';
      empty.append(strong, sub);
      td.append(empty);
      tr.append(td);
      tbody.append(tr);
    }

    return tableWrap;
  };

  const renderNetworkTab = (snap: any) => {
    const networkList = document.createElement('div');
    networkList.className = 'network-list';

    let inFlightRequests = snap.inFlight.map((key: string) => {
      const { method, path } = parseQueryKey(key);
      return { key, method, path, status: 'PENDING', timing: 'In progress...' };
    });

    // Apply search filter
    if (searchTerm.trim()) {
      inFlightRequests = inFlightRequests.filter(
        (req: any) =>
          req.method.toLowerCase().includes(searchTerm) ||
          req.path.toLowerCase().includes(searchTerm) ||
          req.key.toLowerCase().includes(searchTerm)
      );
    }

    if (inFlightRequests.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty';
      const strong = document.createElement('strong');
      strong.textContent = searchTerm
        ? 'No matching requests'
        : 'No active network requests';
      const sub = document.createElement('span');
      sub.textContent = searchTerm
        ? `No network requests match "${searchTerm}".`
        : 'Network requests will appear here while they are in flight.';
      empty.append(strong, sub);
      networkList.append(empty);
      return networkList;
    }

    inFlightRequests.forEach((req: any) => {
      const item = document.createElement('div');
      item.className = 'network-item';

      const methodEl = document.createElement('span');
      methodEl.className = `method-pill ${methodPillClass(req.method)} network-method`;
      methodEl.textContent = req.method;

      const pathEl = document.createElement('span');
      pathEl.className = 'network-path';
      pathEl.textContent = req.path;

      const statusEl = document.createElement('span');
      statusEl.className = 'badge loading';
      statusEl.textContent = req.status;

      const timingEl = document.createElement('span');
      timingEl.className = 'network-timing';
      timingEl.textContent = req.timing;

      item.append(methodEl, pathEl, statusEl, timingEl);
      networkList.append(item);
    });

    return networkList;
  };

  const renderEventsTab = () => {
    const eventLogEl = document.createElement('div');
    eventLogEl.className = 'event-log';

    let filteredEvents = eventLog.slice(0, 100);
    if (searchTerm.trim()) {
      filteredEvents = filteredEvents.filter(
        (event) =>
          event.type.toLowerCase().includes(searchTerm) ||
          event.key.toLowerCase().includes(searchTerm) ||
          event.details.toLowerCase().includes(searchTerm)
      );
    }

    if (filteredEvents.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'empty';
      const strong = document.createElement('strong');
      strong.textContent = searchTerm
        ? 'No matching events'
        : 'No events logged';
      const sub = document.createElement('span');
      sub.textContent = searchTerm
        ? `No events match "${searchTerm}". Try a different search term.`
        : 'Cache operations and manual actions will be logged here.';
      empty.append(strong, sub);
      eventLogEl.append(empty);
      return eventLogEl;
    }

    filteredEvents.forEach((event) => {
      const item = document.createElement('div');
      item.className = 'event-item';

      const timestamp = document.createElement('span');
      timestamp.className = 'event-timestamp';
      timestamp.textContent = new Date(event.timestamp).toLocaleTimeString();

      const type = document.createElement('span');
      type.className = 'event-type';
      type.textContent = event.type;

      const key = document.createElement('span');
      key.className = 'event-key';
      key.textContent = event.key;

      const details = document.createElement('span');
      details.className = 'event-details';
      details.textContent = event.details;

      item.append(timestamp, type, key, details);
      eventLogEl.append(item);
    });

    return eventLogEl;
  };

  const renderSettingsTab = () => {
    const settingsPanel = document.createElement('div');
    settingsPanel.className = 'settings-panel';

    const title = document.createElement('h3');
    title.textContent = 'DevTools Settings';
    title.style.cssText =
      'margin: 0 0 24px; color: var(--kw-text); font-size: 18px;';
    settingsPanel.append(title);

    // Auto-refresh setting
    const refreshGroup = document.createElement('div');
    refreshGroup.className = 'setting-group';

    const refreshLabel = document.createElement('label');
    refreshLabel.className = 'setting-label';
    refreshLabel.textContent = 'Auto-refresh';

    const refreshDesc = document.createElement('p');
    refreshDesc.className = 'setting-description';
    refreshDesc.textContent =
      'Automatically update the cache view every 2 seconds';

    const refreshControl = document.createElement('div');
    refreshControl.className = 'setting-control';

    const refreshToggle = document.createElement('div');
    refreshToggle.className = 'toggle-switch active';
    refreshToggle.addEventListener('click', () => {
      refreshToggle.classList.toggle('active');
      // TODO: Implement setting persistence
    });

    refreshControl.append(refreshToggle);
    refreshGroup.append(refreshLabel, refreshDesc, refreshControl);
    settingsPanel.append(refreshGroup);

    return settingsPanel;
  };

  const render = () => {
    const snap = kweri.getDevToolsSnapshot();
    const keys = collectRowKeys(snap);
    const filteredKeys = filterKeys(keys, searchTerm);
    const totalObs = snap.observers.reduce((a, o) => a + o.count, 0);

    // Handle expanded key state
    if (expandedKey !== prevExpandedRowKey) {
      if (
        expandedKey !== null &&
        prevExpandedRowKey !== null &&
        expandedKey !== prevExpandedRowKey
      ) {
        jsonCollapsedPaths.clear();
      }
      prevExpandedRowKey = expandedKey;
    }

    // Update stats
    stats.replaceChildren();
    const statDefs: [string, number][] = [
      ['Cached', snap.cache.length],
      ['Observers', totalObs],
      ['In flight', snap.inFlight.length]
    ];
    for (const [lbl, val] of statDefs) {
      const chip = document.createElement('span');
      chip.className = 'stat';
      const lblEl = document.createElement('span');
      lblEl.className = 'stat-lbl';
      lblEl.textContent = lbl;
      const valEl = document.createElement('span');
      valEl.className = 'stat-val';
      valEl.textContent = String(val);
      chip.append(lblEl, valEl);
      stats.append(chip);
    }

    // Save scroll positions BEFORE replacing content (only for QUERIES tab)
    const savedScrolls = {
      table: activeTab === 'QUERIES' ? (contentArea.querySelector('.table-wrap')?.scrollTop || 0) : 0,
      detail: activeTab === 'QUERIES' ? (contentArea.querySelector('.detail')?.scrollTop || 0) : 0
    };

    // Render content based on active tab
    contentArea.replaceChildren();
    let content: HTMLElement;

    switch (activeTab) {
      case 'QUERIES':
        content = renderQueriesTab(snap, filteredKeys, savedScrolls);
        break;
      case 'NETWORK':
        content = renderNetworkTab(snap);
        break;
      case 'EVENTS':
        content = renderEventsTab();
        break;
      case 'SETTINGS':
        content = renderSettingsTab();
        break;
      default:
        content = renderQueriesTab(snap, filteredKeys, savedScrolls);
    }

    contentArea.append(content);

    // Restore scroll for QUERIES tab after content is appended
    if (activeTab === 'QUERIES') {
      const tableWrap = contentArea.querySelector('.table-wrap') as HTMLElement;
      if (tableWrap && (savedScrolls.table > 0 || savedScrolls.detail > 0)) {
        // Use requestAnimationFrame to ensure DOM is fully rendered, then restore scroll
        requestAnimationFrame(() => {
          isRestoringScroll = true;
          
          if (savedScrolls.table > 0) {
            tableWrap.scrollTop = savedScrolls.table;
          }
          
          const detail = tableWrap.querySelector('.detail') as HTMLElement;
          if (detail && savedScrolls.detail > 0) {
            detail.scrollTop = savedScrolls.detail;
          }
          
          // Use another rAF to ensure scroll events have fired before re-enabling detection
          requestAnimationFrame(() => {
            isRestoringScroll = false;
          });
        });
      }
    }

    // Update footer stats
    footerLeft.replaceChildren();
    const totalEntries = keys.length;
    const activeConnections = snap.inFlight.length;
    const memoryUsage = `${eventLog.length} events`;

    const footerStats = [
      { label: '', value: totalEntries.toLocaleString() },
      { label: '', value: activeConnections.toString() },
      { label: '', value: memoryUsage }
    ];

    footerStats.forEach((stat) => {
      const statEl = document.createElement('span');
      statEl.className = 'footer-stat';
      statEl.innerHTML = `<span class="footer-stat-val">${stat.value}</span>`;
      footerLeft.append(statEl);
    });
  };

  const requestRender = () => {
    if (!open) return;
    if (isUserScrolling) {
      pendingRenderWhileScrolling = true;
      return;
    }
    render();
  };

  const unsub = kweri.onCacheChange((key, entry) => {
    if (entry) {
      eventLog.unshift({
        timestamp: Date.now(),
        type:
          entry.status === 'loading'
            ? 'FETCH_START'
            : `CACHE_${entry.status.toUpperCase()}`,
        key,
        details:
          entry.status === 'success'
            ? `Cached successfully`
            : entry.status === 'error'
              ? `Request failed`
              : 'Loading...'
      });
      // Keep log size manageable
      if (eventLog.length > 200) {
        eventLog.splice(150);
      }
    }
    requestRender();
  });
  const poll = window.setInterval(() => {
    requestRender();
  }, 2000);

  render();

  return () => {
    unsub();
    window.clearInterval(poll);
    window.clearTimeout(scrollQuietTimer);
    host.remove();
  };
}
