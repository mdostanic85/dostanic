import { defineField, defineType } from 'sanity'

export const expertisePage = defineType({
  name: 'expertisePage',
  title: 'Expertise Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageHeader',
      title: 'Page header',
      type: 'pageHeader',
    }),
    defineField({
      name: 'sideNavEyebrow',
      title: 'Side nav eyebrow',
      type: 'string',
      description: 'Eyebrow above the "On this page" list.',
    }),
    defineField({
      name: 'areas',
      title: 'Expertise areas (ordered)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'expertiseArea' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Expertise Page' }),
  },
})
