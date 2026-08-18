/**
 * Runs `fn` after the current task. Adapters use this to detach work from a
 * notification callback, so a refetch never re-enters `notify()` while it is
 * still iterating observers, and co-subscribers coalesce into a single call.
 */
export function defer(fn: () => void): void {
  if (typeof queueMicrotask === 'function') queueMicrotask(fn)
  else fn()
}
