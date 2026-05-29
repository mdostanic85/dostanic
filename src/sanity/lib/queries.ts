import { groq } from 'next-sanity'

/**
 * Home page singleton — all editable sections.
 * Returns null when the document does not yet exist in the dataset.
 */
export const HOME_PAGE_QUERY = groq`*[_type == "homePage"][0]{
  hero{
    titleLines,
    titleAccentLine,
    intro,
    primaryCta{ label, href },
    secondaryCta{ label, href }
  },
  deliveryStrip{
    eyebrow,
    titleLine1,
    titleAccentLine,
    intro,
    link{ label, href },
    rows[]{ label, blurb }
  },
  selectedWork{
    eyebrow,
    titleLine1,
    titleAccentLine,
    viewAllLabel
  },
  footerCta{
    eyebrow,
    titleLines,
    titleAccentLine,
    body,
    locationLine,
    emailLabel
  },
  seo{ title, description }
}`

/**
 * Site-wide settings singleton — contact email, location, copyright, links.
 */
export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]{
  contactEmail,
  locationLine,
  copyrightOwner
}`

/**
 * Work index page singleton — page header + footer note + SEO.
 * Returns null when the singleton does not yet exist in the dataset.
 */
export const WORK_INDEX_PAGE_QUERY = groq`*[_type == "workIndexPage"][0]{
  pageHeader{
    eyebrow,
    titleLines,
    titleAccentLine,
    intro,
    topRightLabel
  },
  footerNote,
  seo{
    title,
    description
  }
}`

/**
 * All projects, ordered by orderRank (lower first) then year (most recent first).
 * Shape is mapped onto the existing `Project` type in `src/lib/types.ts` —
 * `slug` is unwrapped from Sanity's slug object so consumers stay unchanged.
 */
export const PROJECTS_LIST_QUERY = groq`*[_type == "project" && defined(slug.current)] | order(coalesce(orderRank, 9999) asc, year desc){
  _id,
  title,
  "slug": slug.current,
  domain,
  discipline,
  year,
  featured,
  isCapability,
  category,
  description,
  behanceUrl
}`
