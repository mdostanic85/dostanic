import type { StructureResolver } from 'sanity/structure'

/**
 * Singletons (siteSettings, homePage, aboutPage, expertisePage, workIndexPage)
 * are pinned as single editable entries at the top of the desk and removed from
 * the auto-generated document-type list so editors cannot create duplicates.
 */
const SINGLETON_TYPES = new Set([
  'siteSettings',
  'homePage',
  'aboutPage',
  'expertisePage',
  'workIndexPage',
])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),

      S.divider(),

      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage'),
        ),
      S.listItem()
        .title('Work Index Page')
        .id('workIndexPage')
        .child(
          S.editor()
            .id('workIndexPage')
            .schemaType('workIndexPage')
            .documentId('workIndexPage'),
        ),
      S.listItem()
        .title('Expertise Page')
        .id('expertisePage')
        .child(
          S.editor()
            .id('expertisePage')
            .schemaType('expertisePage')
            .documentId('expertisePage'),
        ),
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(
          S.editor()
            .id('aboutPage')
            .schemaType('aboutPage')
            .documentId('aboutPage'),
        ),

      S.divider(),

      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('caseStudy').title('Case Studies'),
      S.documentTypeListItem('expertiseArea').title('Expertise Areas'),
      S.documentTypeListItem('experienceEntry').title('Experience Entries'),

      // Remaining document types (none expected, but kept future-proof).
      ...S.documentTypeListItems().filter(
        (listItem) => {
          const id = listItem.getId()
          return (
            !!id &&
            !SINGLETON_TYPES.has(id) &&
            ![
              'project',
              'caseStudy',
              'expertiseArea',
              'experienceEntry',
            ].includes(id)
          )
        },
      ),
    ])
