import { describe, it, expect, beforeEach, afterEach } from 'bun:test'
import { registerDevTools } from './registry.js'
import type { DevToolsTarget } from './mount.js'

function stub(): DevToolsTarget {
  return {
    getDevToolsSnapshot: () => ({ cache: [], observers: [], inFlight: [] }),
    onCacheChange: () => () => {},
    invalidateByPath: () => {},
    invalidateQueryByKey: () => {},
    removeQueryByKey: () => {},
  }
}

function makeFakeDom() {
  let appends = 0
  let removes = 0
  const el = () => ({
    tagName: '', className: '', innerHTML: '', textContent: '', hidden: false, value: '',
    style: {},
    setAttribute: () => {}, getAttribute: () => null, addEventListener: () => {},
    append: () => {}, appendChild: () => {}, remove: () => { removes++ },
    querySelector: () => null, querySelectorAll: () => [],
    attachShadow: () => ({ append: () => {} }), replaceChildren: () => {},
  })
  ;(global as any).document = {
    createElement: () => el(),
    head: { appendChild: () => {} },
    body: { appendChild: () => { appends++ }, classList: { toggle: () => {}, remove: () => {} } },
  }
  ;(global as any).window = {
    setInterval: () => 1, clearInterval: () => {},
    setTimeout: () => 1, clearTimeout: () => {}, requestAnimationFrame: () => 1,
  }
  return { appends: () => appends, removes: () => removes }
}

describe('devtools registry', () => {
  let dom: ReturnType<typeof makeFakeDom>

  beforeEach(() => { dom = makeFakeDom() })
  afterEach(() => {
    delete (global as any).document
    delete (global as any).window
  })

  it('mounts a single shared panel for multiple instances', () => {
    const a = registerDevTools(stub(), 'a')
    const b = registerDevTools(stub(), 'b')
    expect(dom.appends()).toBe(1) // one panel, not two
    a(); b()
  })

  it('keeps the panel while any instance remains, tears it down on the last', () => {
    const a = registerDevTools(stub(), 'a')
    const b = registerDevTools(stub(), 'b')
    a()
    expect(dom.removes()).toBe(0) // b still registered
    b()
    expect(dom.removes()).toBeGreaterThan(0) // panel unmounted
  })

  it('switching the active instance does not throw', () => {
    const a = registerDevTools(stub(), 'a')
    const b = registerDevTools(stub(), 'b')
    expect(() => a()).not.toThrow() // deregistering active reassigns active
    b()
  })

  it('is a no-op without a document (SSR)', () => {
    delete (global as any).document
    const off = registerDevTools(stub(), 'a')
    expect(typeof off).toBe('function')
    off()
  })
})
