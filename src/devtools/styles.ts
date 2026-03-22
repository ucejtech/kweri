/** Shadow-DOM styles for the kweri devtools overlay. */
export const devtoolsCss = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');

:host {
  all: initial;
  --kw-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --kw-font-mono: 'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;
  
  /* Modern dark theme with blue accents */
  --kw-bg-base: #0a0e1a;
  --kw-bg-surface: #0f1419;
  --kw-bg-raised: #1a1f2e;
  --kw-bg-hover: rgba(56, 139, 253, 0.1);
  
  /* Borders with subtle glow */
  --kw-border: #1e2a3a;
  --kw-border-strong: #2d3748;
  --kw-border-glow: rgba(56, 139, 253, 0.4);
  --kw-border-accent: #388bfd;
  
  /* Text hierarchy */
  --kw-text: #f0f6fc;
  --kw-text-muted: #8b949e;
  --kw-text-faint: #656d76;
  --kw-text-accent: #58a6ff;
  
  /* Status colors */
  --kw-accent: #388bfd;
  --kw-accent-muted: rgba(56, 139, 253, 0.15);
  --kw-success: #28a745;
  --kw-success-bg: rgba(40, 167, 69, 0.15);
  --kw-warning: #ffc107;
  --kw-warning-bg: rgba(255, 193, 7, 0.15);
  --kw-danger: #dc3545;
  --kw-danger-bg: rgba(220, 53, 69, 0.15);
  
  /* Method colors */
  --kw-get: #28a745;
  --kw-post: #388bfd;
  --kw-put: #ffc107;
  --kw-patch: #6f42c1;
  --kw-delete: #dc3545;
  
  font-family: var(--kw-font-sans);
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--kw-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* { box-sizing: border-box; }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.wrap {
  position: fixed;
  z-index: 999999;
  font-size: 13px;
}
.wrap.br { bottom: 20px; right: 20px; }
.wrap.bl { bottom: 20px; left: 20px; }

.toggle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  border: 1px solid var(--kw-border-accent);
  background: var(--kw-bg-surface);
  color: var(--kw-text-accent);
  cursor: pointer;
  font-family: var(--kw-font-sans);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  backdrop-filter: blur(20px);
  box-shadow:
    0 0 0 1px rgba(56, 139, 253, 0.2) inset,
    0 0 20px rgba(56, 139, 253, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
}
.toggle:hover {
  transform: translateY(-2px) scale(1.02);
  border-color: var(--kw-accent);
  box-shadow:
    0 0 0 1px rgba(56, 139, 253, 0.4) inset,
    0 0 25px rgba(56, 139, 253, 0.5),
    0 12px 40px rgba(0, 0, 0, 0.5);
}
.toggle:active {
  transform: translateY(-1px) scale(1.01);
}
.toggle svg {
  width: 20px;
  height: 20px;
  display: block;
  margin-bottom: 2px;
}
.toggle-label {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.8px;
}

.panel {
  display: none;
  flex-direction: column;
  width: min(800px, calc(100vw - 40px));
  max-height: min(80vh, 720px);
  margin-bottom: 16px;
  border-radius: 16px;
  border: 1px solid var(--kw-border-glow);
  background: var(--kw-bg-surface);
  backdrop-filter: blur(20px);
  box-shadow:
    0 0 0 1px rgba(56, 139, 253, 0.1) inset,
    0 0 40px rgba(56, 139, 253, 0.2),
    0 32px 80px rgba(0, 0, 0, 0.6),
    0 16px 32px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px) scale(0.96);
  transform-origin: bottom center;
}
.wrap.bl .panel {
  transform-origin: bottom left;
}
.wrap.br .panel {
  transform-origin: bottom right;
}
.panel.open {
  display: flex;
  animation: kw-panel-in 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes kw-panel-in {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.head {
  flex-shrink: 0;
  padding: 0;
  background: linear-gradient(180deg, var(--kw-bg-raised) 0%, var(--kw-bg-surface) 100%);
  border-bottom: 1px solid var(--kw-border);
}
.head-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px 12px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}
.brand-mark {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--kw-accent-muted);
  border: 1px solid var(--kw-border-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 1px rgba(56, 139, 253, 0.2) inset;
}
.brand-mark svg {
  width: 20px;
  height: 20px;
  color: var(--kw-accent);
}
.head-titles h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--kw-text);
  line-height: 1.2;
}
.console-title {
  font-family: var(--kw-font-mono);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.version {
  display: inline-block;
  margin-left: 8px;
  font-size: 11px;
  font-weight: 500;
  color: var(--kw-text-muted);
  background: var(--kw-bg-base);
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid var(--kw-border);
}
.close {
  flex-shrink: 0;
  border: 1px solid var(--kw-border);
  background: var(--kw-bg-base);
  color: var(--kw-text-muted);
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
.close:hover {
  color: var(--kw-text);
  background: var(--kw-bg-hover);
  border-color: var(--kw-border-accent);
  transform: scale(1.05);
}
.close:focus-visible {
  outline: 2px solid var(--kw-accent);
  outline-offset: 2px;
}

/* Navigation tabs */
.nav-tabs {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 20px;
  border-bottom: 1px solid var(--kw-border);
}
.nav-tab {
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--kw-text-muted);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 150ms ease;
}
.nav-tab:hover {
  color: var(--kw-text);
  background: var(--kw-bg-hover);
}
.nav-tab.active {
  color: var(--kw-text-accent);
  border-bottom-color: var(--kw-accent);
}

/* Search and controls */
.controls {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--kw-bg-base);
  border-bottom: 1px solid var(--kw-border);
}
.search-container {
  flex: 1;
  position: relative;
}
.search-input {
  width: 100%;
  padding: 10px 40px 10px 40px;
  background: var(--kw-bg-raised);
  border: 1px solid var(--kw-border);
  border-radius: 8px;
  color: var(--kw-text);
  font-size: 13px;
  font-family: var(--kw-font-mono);
  transition: all 150ms ease;
}
.search-input:focus {
  outline: none;
  border-color: var(--kw-accent);
  box-shadow: 0 0 0 3px rgba(56, 139, 253, 0.1);
}
.search-input::placeholder {
  color: var(--kw-text-faint);
}
.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--kw-text-faint);
  font-size: 14px;
  pointer-events: none;
}
.search-clear {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--kw-bg-hover);
  border: none;
  color: var(--kw-text-muted);
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  display: none;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease;
}
.search-clear:hover {
  background: var(--kw-bg-raised);
  color: var(--kw-text);
}
.search-input:not(:placeholder-shown) + .search-clear {
  display: flex;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px 0 16px 16px;
}
.stat {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 6px;
  background: var(--kw-bg-base);
  border: 1px solid var(--kw-border);
  font-size: 11px;
  color: var(--kw-text-muted);
}
.stat-val {
  font-family: var(--kw-font-mono);
  font-weight: 600;
  font-size: 13px;
  color: var(--kw-text);
  line-height: 1;
}
.stat-lbl {
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--kw-text-faint);
}

/* Content area for different tabs */
.content-area {
  overflow: auto;
  flex: 1;
  background: var(--kw-bg-base);
  scrollbar-width: thin;
  scrollbar-color: var(--kw-border-strong) transparent;
}

.table-wrap {
  overflow: auto;
  flex: 1;
  background: var(--kw-bg-base);
  scrollbar-width: thin;
  scrollbar-color: var(--kw-border-strong) transparent;
}
.table-wrap::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.table-wrap::-webkit-scrollbar-track {
  background: transparent;
}
.table-wrap::-webkit-scrollbar-thumb {
  background: var(--kw-border-strong);
  border-radius: 3px;
}
.table-wrap::-webkit-scrollbar-thumb:hover {
  background: var(--kw-text-faint);
}

table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  text-align: left;
  padding: 14px 20px;
  border-bottom: 1px solid var(--kw-border);
  vertical-align: middle;
}
th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--kw-bg-base);
  color: var(--kw-text-faint);
  font-weight: 500;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  box-shadow: 0 1px 0 var(--kw-border);
  backdrop-filter: blur(10px);
}
tbody tr {
  transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}
tbody tr:hover td {
  background: var(--kw-bg-hover);
}
tbody tr:focus-within td {
  background: rgba(56, 139, 253, 0.06);
}
tbody tr.row-expanded td {
  background: rgba(56, 139, 253, 0.05);
  border-color: var(--kw-border-accent);
}

.mono {
  font-family: var(--kw-font-mono);
  font-size: 11px;
  word-break: break-all;
  line-height: 1.35;
}

.method-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: var(--kw-font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: 1px solid transparent;
  text-transform: uppercase;
}
.method-pill.get { 
  color: #22c55e; 
  background: rgba(34, 197, 94, 0.15); 
  border-color: rgba(34, 197, 94, 0.3); 
}
.method-pill.post { 
  color: #3b82f6; 
  background: rgba(59, 130, 246, 0.15); 
  border-color: rgba(59, 130, 246, 0.3); 
}
.method-pill.put { 
  color: #f59e0b; 
  background: rgba(245, 158, 11, 0.15); 
  border-color: rgba(245, 158, 11, 0.3); 
}
.method-pill.patch { 
  color: #8b5cf6; 
  background: rgba(139, 92, 246, 0.15); 
  border-color: rgba(139, 92, 246, 0.3); 
}
.method-pill.delete { 
  color: #ef4444; 
  background: rgba(239, 68, 68, 0.15); 
  border-color: rgba(239, 68, 68, 0.3); 
}
.method-pill.other { 
  color: var(--kw-text-muted); 
  background: var(--kw-bg-raised); 
  border-color: var(--kw-border); 
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  font-family: var(--kw-font-mono);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid transparent;
}
.badge.idle { 
  background: var(--kw-bg-raised); 
  color: var(--kw-text-muted); 
  border-color: var(--kw-border); 
}
.badge.loading { 
  background: rgba(245, 158, 11, 0.15); 
  color: #f59e0b; 
  border-color: rgba(245, 158, 11, 0.3);
  animation: kw-pulse 2s ease-in-out infinite;
}
.badge.success { 
  background: rgba(34, 197, 94, 0.15); 
  color: #22c55e; 
  border-color: rgba(34, 197, 94, 0.3); 
}
.badge.error { 
  background: rgba(239, 68, 68, 0.15); 
  color: #ef4444; 
  border-color: rgba(239, 68, 68, 0.3); 
}
.badge.fresh { 
  background: rgba(34, 197, 94, 0.15); 
  color: #22c55e; 
  border-color: rgba(34, 197, 94, 0.3); 
}
.badge.stale { 
  background: rgba(245, 158, 11, 0.15); 
  color: #f59e0b; 
  border-color: rgba(245, 158, 11, 0.3); 
}

.flight-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--kw-text-faint);
  transition: all 150ms ease;
}
.flight-dot.on {
  background: #22c55e;
  box-shadow: 
    0 0 0 2px rgba(34, 197, 94, 0.3),
    0 0 8px rgba(34, 197, 94, 0.6);
  animation: kw-pulse 2s ease-in-out infinite;
}
@keyframes kw-pulse {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.7; 
    transform: scale(1.1);
  }
}

.btn-row { 
  display: flex; 
  gap: 8px; 
  flex-wrap: wrap; 
  justify-content: flex-end; 
}
.btn {
  border: 1px solid var(--kw-border);
  background: var(--kw-bg-raised);
  color: var(--kw-text);
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 11px;
  font-family: var(--kw-font-sans);
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.btn:hover {
  background: var(--kw-bg-hover);
  border-color: var(--kw-accent);
  transform: translateY(-1px);
}
.btn:active {
  transform: translateY(0);
}
.btn:focus-visible {
  outline: 2px solid var(--kw-accent);
  outline-offset: 2px;
}
.btn.danger {
  border-color: rgba(239, 68, 68, 0.3);
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}
.btn.danger:hover {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.2);
  transform: translateY(-1px);
}

.global-action-btn {
  padding: 8px 16px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 6px;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
.global-action-btn:hover {
  background: rgba(239, 68, 68, 0.25);
  border-color: #ef4444;
  transform: translateY(-1px);
}

.detail {
  padding: 16px 20px;
  background: var(--kw-bg-base);
  border-top: 1px solid var(--kw-border);
  max-height: min(400px, 50vh);
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--kw-border-strong) transparent;
}
.detail::-webkit-scrollbar {
  width: 6px;
}
.detail::-webkit-scrollbar-track {
  background: transparent;
}
.detail::-webkit-scrollbar-thumb {
  background: var(--kw-border-strong);
  border-radius: 3px;
}
.detail-inner {
  font-family: var(--kw-font-mono);
  font-size: 12px;
  line-height: 1.5;
  color: var(--kw-text-muted);
}
.detail-meta {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--kw-border);
}
.detail-meta-line {
  word-break: break-all;
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.detail-meta-line:first-child { margin-top: 0; }
.detail-meta-k {
  color: var(--kw-text-faint);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 0.8px;
  min-width: 60px;
  flex-shrink: 0;
}
.detail-entry-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--kw-text-faint);
  margin-bottom: 8px;
}
.detail-empty-msg {
  margin-top: 12px;
  color: var(--kw-text-muted);
  font-style: italic;
  text-align: center;
  padding: 20px;
  background: var(--kw-bg-raised);
  border-radius: 8px;
  border: 1px solid var(--kw-border);
}

/* Collapsible JSON tree */
.j-tree {
  user-select: text;
  font-family: var(--kw-font-mono);
}
.j-node {
  margin: 0;
}
.j-control {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
}
.j-exp {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: 1px solid var(--kw-border);
  border-radius: 4px;
  background: var(--kw-bg-raised);
  color: var(--kw-text-muted);
  font-size: 10px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--kw-font-mono);
  transition: all 150ms ease;
}
.j-exp:hover {
  background: var(--kw-bg-hover);
  color: var(--kw-text);
  border-color: var(--kw-accent);
}
.j-exp:focus-visible {
  outline: 2px solid var(--kw-accent);
  outline-offset: 2px;
}
.j-summary {
  color: var(--kw-text-faint);
  font-style: italic;
  font-size: 11px;
}
.j-node[data-expanded="true"] .j-summary {
  display: none;
}
.j-node[data-expanded="false"] .j-when-expanded {
  display: none !important;
}
.j-punct {
  color: var(--kw-text-muted);
  font-weight: 500;
}
.j-body {
  margin-left: 16px;
  border-left: 1px solid var(--kw-border);
  padding-left: 12px;
  margin-top: 4px;
}
.j-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 4px 8px;
  margin-top: 4px;
}
.j-row:first-child { margin-top: 6px; }
.j-key {
  flex-shrink: 0;
  color: #3b82f6;
  font-weight: 500;
}
.j-idx {
  flex-shrink: 0;
  color: #f59e0b;
  min-width: 2rem;
  font-weight: 500;
}
.j-val {
  flex: 1;
  min-width: 0;
}
.j-close-line {
  margin-top: 4px;
  margin-left: 0;
}
.j-str { color: #22c55e; }
.j-num { color: #3b82f6; }
.j-bool { color: #ef4444; }
.j-null { color: var(--kw-text-faint); font-style: italic; }
.j-undef { color: var(--kw-text-faint); font-style: italic; }

.empty {
  padding: 40px 20px;
  text-align: center;
  color: var(--kw-text-muted);
  font-size: 14px;
  line-height: 1.6;
}
.empty strong {
  display: block;
  color: var(--kw-text);
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 16px;
}
.empty span {
  font-size: 13px;
  color: var(--kw-text-faint);
}

/* Footer stats */
.footer {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: var(--kw-bg-base);
  border-top: 1px solid var(--kw-border);
  font-family: var(--kw-font-mono);
  font-size: 11px;
  color: var(--kw-text-faint);
}
.footer-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.footer-stat {
  display: flex;
  align-items: center;
  gap: 4px;
}
.footer-stat-val {
  color: var(--kw-text);
  font-weight: 600;
}
.footer-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.system-status {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #22c55e;
  font-weight: 500;
}
.system-status::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #22c55e;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.6);
}

/* Event log styling */
.event-log {
  padding: 20px;
  background: var(--kw-bg-base);
  font-family: var(--kw-font-mono);
  font-size: 12px;
}
.event-item {
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: var(--kw-bg-raised);
  border: 1px solid var(--kw-border);
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.event-timestamp {
  color: var(--kw-text-faint);
  min-width: 80px;
  flex-shrink: 0;
}
.event-type {
  color: var(--kw-accent);
  min-width: 120px;
  flex-shrink: 0;
  font-weight: 600;
}
.event-key {
  color: var(--kw-text-muted);
  min-width: 200px;
  flex-shrink: 0;
  word-break: break-all;
}
.event-details {
  color: var(--kw-text);
  flex: 1;
}

/* Network tab styling */
.network-list {
  padding: 20px;
}
.network-item {
  padding: 12px 16px;
  background: var(--kw-bg-raised);
  border: 1px solid var(--kw-border);
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.network-method {
  min-width: 60px;
}
.network-path {
  flex: 1;
  font-family: var(--kw-font-mono);
  font-size: 13px;
  color: var(--kw-text);
}
.network-timing {
  color: var(--kw-text-muted);
  font-family: var(--kw-font-mono);
  font-size: 12px;
  min-width: 80px;
  text-align: right;
}

/* Settings tab styling */
.settings-panel {
  padding: 20px;
  max-width: 600px;
}
.setting-group {
  margin-bottom: 24px;
}
.setting-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--kw-text);
  margin-bottom: 8px;
}
.setting-description {
  font-size: 12px;
  color: var(--kw-text-muted);
  margin-bottom: 12px;
}
.setting-control {
  display: flex;
  align-items: center;
  gap: 8px;
}
.toggle-switch {
  position: relative;
  width: 48px;
  height: 24px;
  background: var(--kw-border);
  border-radius: 12px;
  cursor: pointer;
  transition: background 150ms ease;
}
.toggle-switch.active {
  background: var(--kw-accent);
}
.toggle-switch::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: transform 150ms ease;
}
.toggle-switch.active::before {
  transform: translateX(24px);
}

@media (prefers-reduced-motion: reduce) {
  .panel.open {
    animation: none;
    opacity: 1;
    transform: none;
  }
  .flight-dot.on {
    animation: none;
  }
  .toggle,
  tbody tr,
  .btn {
    transition: none;
  }
}
`;
