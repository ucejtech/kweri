import type { CacheEntry } from './cache'

export type Callback = (entry: CacheEntry) => void
export type Unsubscribe = () => void

export class ObserverRegistry {
  private observers = new Map<string, Set<Callback>>()

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
  }
}
