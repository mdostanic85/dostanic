import type { SchemaTypeDefinition } from 'sanity'

import { cta } from './objects/cta'
import { pageHeader } from './objects/pageHeader'
import { seo } from './objects/seo'

import { aboutPage } from './aboutPage'
import { caseStudy } from './caseStudy'
import { experienceEntry } from './experienceEntry'
import { expertiseArea } from './expertiseArea'
import { expertisePage } from './expertisePage'
import { homePage } from './homePage'
import { project } from './project'
import { siteSettings } from './siteSettings'
import { workIndexPage } from './workIndexPage'

export const schemaTypes: SchemaTypeDefinition[] = [
  // shared objects
  cta,
  pageHeader,
  seo,

  // singletons
  siteSettings,
  homePage,
  aboutPage,
  expertisePage,
  workIndexPage,

  // documents
  project,
  caseStudy,
  experienceEntry,
  expertiseArea,
]
