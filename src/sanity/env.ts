/**
 * Centralised reads of Sanity environment variables.
 *
 * Phase 1: project/dataset fall back to safe placeholders ("placeholder" /
 * "production") so `next build` succeeds before the Sanity project is
 * provisioned. The Studio + read-only client will not return real data
 * until NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET are
 * set in `.env.local` (and on Vercel). A console warning is emitted in
 * development to surface the placeholder state.
 */

const PROJECT_ID_PLACEHOLDER = 'placeholder'
const DATASET_PLACEHOLDER = 'production'

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || PROJECT_ID_PLACEHOLDER

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || DATASET_PLACEHOLDER

export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || '/studio'

export const isUsingPlaceholderSanityEnv =
  projectId === PROJECT_ID_PLACEHOLDER

if (
  process.env.NODE_ENV !== 'production' &&
  isUsingPlaceholderSanityEnv &&
  typeof window === 'undefined'
) {
  // eslint-disable-next-line no-console
  console.warn(
    '[sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is not set — using placeholder. Studio and Sanity client will not return real data until configured.',
  )
}
