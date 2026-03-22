import type { KweriDevToolsSnapshot } from '../kweri/devtools-types.js'
import type { CacheEntry } from '../cache/cache-entry.js'

export function parseQueryKey(key: string): {
  method: string
  path: string
  params: string
} {
  const i = key.indexOf(':')
  if (i < 0) return { method: '?', path: key, params: '' }
  const j = key.indexOf(':', i + 1)
  if (j < 0) return { method: key.slice(0, i), path: key.slice(i + 1), params: '' }
  return {
    method: key.slice(0, i),
    path: key.slice(i + 1, j),
    params: key.slice(j + 1),
  }
}

export function relativeTime(updatedAt: number): string {
  if (updatedAt <= 0) return '—'
  const s = Math.floor((Date.now() - updatedAt) / 1000)
  if (s < 5) return 'just now'
  if (s < 60) return `${s}s ago`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m ago`
  return `${Math.floor(m / 60)}h ago`
}

export function collectRowKeys(snapshot: KweriDevToolsSnapshot): string[] {
  const set = new Set<string>()
  for (const { key } of snapshot.cache) set.add(key)
  for (const k of snapshot.inFlight) set.add(k)
  for (const { key } of snapshot.observers) set.add(key)
  return Array.from(set).sort()
}

export function observerCountFor(
  snapshot: KweriDevToolsSnapshot,
  key: string,
): number {
  const row = snapshot.observers.find((o) => o.key === key)
  return row?.count ?? 0
}

export function entryForKey(
  snapshot: KweriDevToolsSnapshot,
  key: string,
): CacheEntry | undefined {
  return snapshot.cache.find((c) => c.key === key)?.entry
}

export function methodPillClass(method: string): string {
  const u = method.toUpperCase()
  const map: Record<string, string> = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete',
  }
  return map[u] ?? 'other'
}
