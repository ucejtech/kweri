/// <reference lib="dom" />
import type { CacheEntry } from '../cache/cache-entry.js'

function quoteKey(k: string): string {
  return JSON.stringify(k)
}

function jsonChildPath(parent: string, segment: string | number): string {
  const enc =
    typeof segment === 'number' ? String(segment) : encodeURIComponent(segment)
  return `${parent}/${enc}`
}

function wireToggle(
  node: HTMLElement,
  exp: HTMLButtonElement,
  path: string,
  collapsedPaths: Set<string>,
): void {
  const applyVisual = (ex: boolean) => {
    node.dataset.expanded = ex ? 'true' : 'false'
    exp.textContent = ex ? '▼' : '▶'
    exp.setAttribute('aria-expanded', ex ? 'true' : 'false')
  }
  const expanded = !collapsedPaths.has(path)
  applyVisual(expanded)
  exp.addEventListener('click', (e: MouseEvent) => {
    e.stopPropagation()
    const wasExpanded = node.dataset.expanded === 'true'
    const next = !wasExpanded
    applyVisual(next)
    if (next) collapsedPaths.delete(path)
    else collapsedPaths.add(path)
  })
}

/** Collapsible JSON tree for cache entry inspection (vanilla DOM). */
function renderJsonValue(
  value: unknown,
  depth: number,
  path: string,
  collapsedPaths: Set<string>,
): HTMLElement {
  if (value === null) {
    const s = document.createElement('span')
    s.className = 'j-null'
    s.textContent = 'null'
    return s
  }
  if (value === undefined) {
    const s = document.createElement('span')
    s.className = 'j-undef'
    s.textContent = 'undefined'
    return s
  }
  if (typeof value === 'boolean') {
    const s = document.createElement('span')
    s.className = 'j-bool'
    s.textContent = value ? 'true' : 'false'
    return s
  }
  if (typeof value === 'number') {
    const s = document.createElement('span')
    s.className = 'j-num'
    s.textContent = Number.isFinite(value) ? String(value) : JSON.stringify(value)
    return s
  }
  if (typeof value === 'string') {
    const s = document.createElement('span')
    s.className = 'j-str'
    s.textContent = JSON.stringify(value)
    return s
  }
  if (typeof value === 'bigint') {
    const s = document.createElement('span')
    s.className = 'j-num'
    s.textContent = `${value}n`
    return s
  }
  if (value instanceof Date) {
    const s = document.createElement('span')
    s.className = 'j-str'
    s.textContent = JSON.stringify(value.toISOString())
    return s
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      const s = document.createElement('span')
      s.className = 'j-punct'
      s.textContent = '[]'
      return s
    }
    const node = document.createElement('div')
    node.className = 'j-node j-node-arr'
    const ctrl = document.createElement('div')
    ctrl.className = 'j-control'
    const exp = document.createElement('button')
    exp.type = 'button'
    exp.className = 'j-exp'
    exp.setAttribute('aria-label', 'Toggle array')
    const sum = document.createElement('span')
    sum.className = 'j-summary'
    sum.textContent = `[ ${value.length} ${value.length === 1 ? 'item' : 'items'} ]`
    const openP = document.createElement('span')
    openP.className = 'j-punct j-when-expanded'
    openP.textContent = '['
    ctrl.append(exp, sum, openP)
    const body = document.createElement('div')
    body.className = 'j-body j-when-expanded'
    value.forEach((item, i) => {
      const row = document.createElement('div')
      row.className = 'j-row j-row-idx'
      const idx = document.createElement('span')
      idx.className = 'j-idx'
      idx.textContent = `${i}: `
      const val = document.createElement('span')
      val.className = 'j-val'
      val.append(
        renderJsonValue(item, depth + 1, jsonChildPath(path, i), collapsedPaths),
      )
      row.append(idx, val)
      body.append(row)
    })
    const closeLine = document.createElement('div')
    closeLine.className = 'j-close-line j-when-expanded'
    const closeP = document.createElement('span')
    closeP.className = 'j-punct'
    closeP.textContent = ']'
    closeLine.append(closeP)
    body.append(closeLine)
    node.append(ctrl, body)
    wireToggle(node, exp, path, collapsedPaths)
    return node
  }

  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>
    const keys = Object.keys(obj)
    if (keys.length === 0) {
      const s = document.createElement('span')
      s.className = 'j-punct'
      s.textContent = '{}'
      return s
    }
    const node = document.createElement('div')
    node.className = 'j-node j-node-obj'
    const ctrl = document.createElement('div')
    ctrl.className = 'j-control'
    const exp = document.createElement('button')
    exp.type = 'button'
    exp.className = 'j-exp'
    exp.setAttribute('aria-label', 'Toggle object')
    const sum = document.createElement('span')
    sum.className = 'j-summary'
    sum.textContent = `{ ${keys.length} ${keys.length === 1 ? 'key' : 'keys'} }`
    const openP = document.createElement('span')
    openP.className = 'j-punct j-when-expanded'
    openP.textContent = '{'
    ctrl.append(exp, sum, openP)
    const body = document.createElement('div')
    body.className = 'j-body j-when-expanded'
    for (const k of keys) {
      const row = document.createElement('div')
      row.className = 'j-row'
      const kEl = document.createElement('span')
      kEl.className = 'j-key'
      kEl.textContent = `${quoteKey(k)}: `
      const vEl = document.createElement('span')
      vEl.className = 'j-val'
      vEl.append(
        renderJsonValue(obj[k], depth + 1, jsonChildPath(path, k), collapsedPaths),
      )
      row.append(kEl, vEl)
      body.append(row)
    }
    const closeLine = document.createElement('div')
    closeLine.className = 'j-close-line j-when-expanded'
    const closeP = document.createElement('span')
    closeP.className = 'j-punct'
    closeP.textContent = '}'
    closeLine.append(closeP)
    body.append(closeLine)
    node.append(ctrl, body)
    wireToggle(node, exp, path, collapsedPaths)
    return node
  }

  const fallback = document.createElement('span')
  fallback.className = 'j-str'
  fallback.textContent = String(value)
  return fallback
}

export function buildEntryDetail(
  key: string,
  params: string,
  entry: CacheEntry | undefined,
  collapsedPaths: Set<string>,
): HTMLElement {
  const root = document.createElement('div')
  root.className = 'detail-inner'

  const meta = document.createElement('div')
  meta.className = 'detail-meta'
  const lineKey = document.createElement('div')
  lineKey.className = 'detail-meta-line'
  const mk = document.createElement('span')
  mk.className = 'detail-meta-k'
  mk.textContent = 'key'
  lineKey.append(mk, document.createTextNode(' '), document.createTextNode(key))
  const lineParams = document.createElement('div')
  lineParams.className = 'detail-meta-line'
  const mp = document.createElement('span')
  mp.className = 'detail-meta-k'
  mp.textContent = 'params'
  lineParams.append(mp, document.createTextNode(' '), document.createTextNode(params || '(empty)'))
  meta.append(lineKey, lineParams)

  if (!entry) {
    const empty = document.createElement('div')
    empty.className = 'detail-empty-msg'
    empty.textContent = '(no cache entry — in-flight or observers only)'
    root.append(meta, empty)
    return root
  }

  const label = document.createElement('div')
  label.className = 'detail-entry-label'
  label.textContent = 'entry'
  const tree = document.createElement('div')
  tree.className = 'j-tree'
  tree.append(renderJsonValue(entry, 0, '$', collapsedPaths))
  root.append(meta, label, tree)
  return root
}
