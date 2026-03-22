export type Fetcher<T = unknown> = () => Promise<T>

export class FetchOrchestrator {
  private inFlight = new Map<string, Promise<unknown>>()

  // Deduplicates concurrent requests - returns existing promise if already in flight
  async fetch<T>(key: string, fetcher: Fetcher<T>): Promise<T> {
    const existing = this.inFlight.get(key)
    if (existing) {
      return existing as Promise<T>
    }

    const promise = fetcher().finally(() => {
      this.inFlight.delete(key)
    })

    this.inFlight.set(key, promise)
    return promise
  }

  isInFlight(key: string): boolean {
    return this.inFlight.has(key)
  }

  keys(): IterableIterator<string> {
    return this.inFlight.keys()
  }

  get size(): number {
    return this.inFlight.size
  }

  clear(): void {
    this.inFlight.clear()
  }
}
