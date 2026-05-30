import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import DeliveryStrip from '@/components/home/DeliveryStrip'
import SelectedWork from '@/components/home/SelectedWork'
import FooterCTA from '@/components/home/FooterCTA'
import { sanityFetch } from '@/sanity/lib/fetch'
import { HOME_PAGE_QUERY, SITE_SETTINGS_QUERY } from '@/sanity/lib/queries'

type CmsHomePage = {
  hero?: {
    titleLines?: string[]
    titleAccentLine?: string
    intro?: string
    primaryCta?: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
  }
  deliveryStrip?: {
    eyebrow?: string
    titleLine1?: string
    titleAccentLine?: string
    intro?: string
    rows?: { label: string; blurb: string }[]
  }
  selectedWork?: {
    eyebrow?: string
    titleLine1?: string
    titleAccentLine?: string
    viewAllLabel?: string
  }
  footerCta?: {
    eyebrow?: string
    titleLines?: string[]
    titleAccentLine?: string
    body?: string
    locationLine?: string
    emailLabel?: string
  }
  seo?: { title?: string; description?: string }
}

type CmsSiteSettings = {
  contactEmail?: string
  locationLine?: string
  copyrightOwner?: string
}

const FALLBACK_METADATA: Metadata = {
  title: 'Milos Dostanic — Senior Product Designer',
  description:
    'Senior Product Designer focused on complex software UX — B2B SaaS, internal tools, and data-heavy products. Backed by design systems, Figma-to-code workflows, and AI-assisted prototyping.',
}

export async function generateMetadata(): Promise<Metadata> {
  const cms = await sanityFetch<CmsHomePage | null>({
    query: HOME_PAGE_QUERY,
    tags: ['homePage'],
  })
  return {
    title: cms?.seo?.title ?? FALLBACK_METADATA.title,
    description: cms?.seo?.description ?? FALLBACK_METADATA.description,
  }
}

export default async function HomePage() {
  const [cms, settings] = await Promise.all([
    sanityFetch<CmsHomePage | null>({ query: HOME_PAGE_QUERY, tags: ['homePage'] }),
    sanityFetch<CmsSiteSettings | null>({ query: SITE_SETTINGS_QUERY, tags: ['siteSettings'] }),
  ])

  return (
    <main id="top">
      <Hero
        titleLines={cms?.hero?.titleLines}
        titleAccentLine={cms?.hero?.titleAccentLine}
        intro={cms?.hero?.intro}
        primaryCta={cms?.hero?.primaryCta}
        secondaryCta={cms?.hero?.secondaryCta}
      />
      <DeliveryStrip
        titleLine1={cms?.deliveryStrip?.titleLine1}
        titleAccentLine={cms?.deliveryStrip?.titleAccentLine}
        intro={cms?.deliveryStrip?.intro}
        rows={cms?.deliveryStrip?.rows}
      />
      <SelectedWork
        titleLine1={cms?.selectedWork?.titleLine1}
        titleAccentLine={cms?.selectedWork?.titleAccentLine}
        viewAllLabel={cms?.selectedWork?.viewAllLabel}
      />
      <FooterCTA
        titleLines={cms?.footerCta?.titleLines}
        titleAccentLine={cms?.footerCta?.titleAccentLine}
        body={cms?.footerCta?.body}
        locationLine={settings?.locationLine ?? cms?.footerCta?.locationLine}
        emailLabel={cms?.footerCta?.emailLabel}
        email={settings?.contactEmail}
        copyrightOwner={settings?.copyrightOwner}
      />
    </main>
  )
}
