'use client'

import dynamic from 'next/dynamic'

const StudioRoot = dynamic(
  async () => {
    const [{ NextStudio }, { default: config }] = await Promise.all([
      import('next-sanity/studio/client-component'),
      import('../../../sanity.config'),
    ])
    return function StudioWithConfig() {
      return <NextStudio config={config} />
    }
  },
  {
    ssr: false,
    loading: () => (
      <div
        className="flex min-h-dvh items-center justify-center px-5 text-sm text-muted"
        role="status"
        aria-live="polite"
      >
        Loading Studio…
      </div>
    ),
  },
)

export default function NextStudioClient() {
  return <StudioRoot />
}
