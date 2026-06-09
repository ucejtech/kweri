import { mountPanel, type DevToolsHost, type DevToolsTarget } from './mount.js'
import type { MountKweriDevToolsOptions } from './options.js'

interface Entry {
  id: string
  label: string
  kweri: DevToolsTarget
}

let entries: Entry[] = []
let activeId: string | null = null
let unmountPanel: (() => void) | null = null
let nextId = 1
const subs = new Set<() => void>()

function notify() {
  subs.forEach((cb) => cb())
}

const host: DevToolsHost = {
  getActive: () => entries.find((e) => e.id === activeId)?.kweri ?? null,
  listInstances: () => entries.map((e) => ({ id: e.id, label: e.label })),
  activeId: () => activeId,
  setActive: (id) => {
    if (entries.some((e) => e.id === id)) {
      activeId = id
      notify()
    }
  },
  subscribe: (cb) => {
    subs.add(cb)
    return () => {
      subs.delete(cb)
    }
  },
}

/**
 * Register an instance with the shared devtools panel. The first registration
 * mounts a single panel; further instances appear in its switcher rather than
 * stacking their own panels. Returns a deregister fn that unmounts the panel
 * once the last instance leaves.
 */
export function registerDevTools(
  kweri: DevToolsTarget,
  label: string,
  options?: MountKweriDevToolsOptions
): () => void {
  if (typeof document === 'undefined') return () => {}

  const id = String(nextId++)
  entries.push({ id, label, kweri })
  if (activeId === null) activeId = id
  if (unmountPanel === null) unmountPanel = mountPanel(host, options)
  notify()

  return () => {
    entries = entries.filter((e) => e.id !== id)
    if (activeId === id) activeId = entries[0]?.id ?? null
    if (entries.length === 0 && unmountPanel) {
      unmountPanel()
      unmountPanel = null
    }
    notify()
  }
}
