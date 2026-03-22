/**
 * True when common bundlers/runtimes indicate a production build.
 * Used to disable dev-only features (e.g. floating devtools) in shipped bundles.
 */
export function isProductionRuntime(): boolean {
  const env =
    typeof process !== 'undefined' &&
    process.env &&
    typeof process.env === 'object'
      ? (process.env as Record<string, string | undefined>)
      : undefined

  if (env) {
    if (env.NODE_ENV === 'production') return true
    if (env.BUN_ENV === 'production') return true
    if (env.VERCEL_ENV === 'production') return true
  }

  try {
    const m = import.meta as ImportMeta & {
      env?: { PROD?: boolean; MODE?: string }
    }
    if (m.env?.PROD === true) return true
    if (m.env?.MODE === 'production') return true
  } catch {
    /* non-module / restricted contexts */
  }

  return false
}
