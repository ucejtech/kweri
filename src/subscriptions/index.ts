import type { CacheEntry } from '../cache/index.js'

export type Callback = (entry: CacheEntry) => void
export type Unsubscribe = () => void

export type GlobalNotifyCallback = (key: string, entry: CacheEntry) => void

export class ObserverRegistry {
  private observers = new Map<string, Set<Callback>>()
  private globalListeners = new Set<GlobalNotifyCallback>()

  /** Fires after every per-key notify (devtools, logging). */
  subscribeAll(callback: GlobalNotifyCallback): Unsubscribe {
    this.globalListeners.add(callback)
    return () => {
      this.globalListeners.delete(callback)
    }
  }

  subscribe(key: string, callback: Callback): Unsubscribe {
    const callbacks = this.observers.get(key)
    
    if (callbacks) {
      callbacks.add(callback)
    } else {
      this.observers.set(key, new Set([callback]))
    }
    
    return () => {
      const callbacks = this.observers.get(key)
      if (!callbacks) return
      
      callbacks.delete(callback)
      if (callbacks.size === 0) {
        this.observers.delete(key)
      }
    }
  }

  notify(key: string, entry: CacheEntry): void {
    const callbacks = this.observers.get(key)
    if (!callbacks || callbacks.size === 0) return
    
    // Copy to avoid mutation during iteration
    const callbacksCopy = Array.from(callbacks)
    
    for (const callback of callbacksCopy) {
      try {
        callback(entry)
      } catch (error) {
        console.error(`Observer error for key "${key}":`, error)
      }
    }

    const globalsCopy = Array.from(this.globalListeners)
    for (const callback of globalsCopy) {
      try {
        callback(key, entry)
      } catch (error) {
        console.error(`Global observer error for key "${key}":`, error)
      }
    }
  }

  keys(): IterableIterator<string> {
    return this.observers.keys()
  }

  // Used by GC to check if entry can be evicted
  getObserverCount(key: string): number {
    return this.observers.get(key)?.size ?? 0
  }

  get size(): number {
    return this.observers.size
  }

  clear(key: string): void {
    this.observers.delete(key)
  }

  clearAll(): void {
    this.observers.clear()
    this.globalListeners.clear()
  }
}
