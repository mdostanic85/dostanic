import { defineField, defineType } from 'sanity'

export const workIndexPage = defineType({
  name: 'workIndexPage',
  title: 'Work Index Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageHeader',
      title: 'Page header',
      type: 'pageHeader',
    }),
    defineField({
      name: 'footerNote',
      title: 'Footer note',
      type: 'text',
      rows: 3,
      description: 'e.g. "More projects available on request — including NDA-covered enterprise work…"',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Work Index Page' }),
  },
})
