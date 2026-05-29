/**
 * Sanity Studio mounted at `/studio` via Next.js App Router.
 * The catch-all segment lets Studio handle its own internal routing.
 *
 * Studio assets are large; `dynamic = 'force-static'` is intentionally not
 * set — Studio uses its own client-side data fetching. Keep this page on
 * the Node.js runtime (Studio depends on Node APIs).
 */
import NextStudioClient from '@/components/studio/NextStudioClient'

export { viewport } from 'next-sanity/studio'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

export const metadata = {
  title: 'Studio',
  robots: { index: false, follow: false },
}

export default function StudioPage() {
  return <NextStudioClient />
}
