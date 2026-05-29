import { client } from './client'
import { isUsingPlaceholderSanityEnv } from '../env'

type FetchOptions<TParams> = {
  query: string
  params?: TParams
  tags?: string[]
  /** Seconds before Next.js revalidates this fetch. Defaults to 60. */
  revalidate?: number
}

/**
 * Thin wrapper around `client.fetch` that:
 *  - short-circuits to null when env is unconfigured (placeholder projectId),
 *    so public pages render their hardcoded fallback without a network call;
 *  - swallows network/permission errors and returns null so route rendering
 *    never crashes on transient Sanity issues — callers fall back to the
 *    existing hardcoded content.
 *
 * Errors are logged in development to surface configuration issues without
 * masking them in production logs.
 */
export async function sanityFetch<T>({
  query,
  params,
  tags,
  revalidate = 60,
}: FetchOptions<Record<string, unknown> | undefined>): Promise<T | null> {
  if (isUsingPlaceholderSanityEnv) return null

  try {
    return await client.fetch<T>(query, params ?? {}, {
      next: { revalidate, tags },
    })
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('[sanity] fetch failed — falling back to hardcoded content', err)
    }
    return null
  }
}
