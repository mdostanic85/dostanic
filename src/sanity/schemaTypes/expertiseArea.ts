import { defineField, defineType } from 'sanity'

export const expertiseArea = defineType({
  name: 'expertiseArea',
  title: 'Expertise Area',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'idSlug',
      title: 'Section ID slug',
      type: 'slug',
      description: 'Used for in-page anchor links (e.g. #product-ux-ui).',
      options: { source: 'title', maxLength: 64 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'usefulWhen',
      title: 'Useful when',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'outputs',
      title: 'Typical outputs',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'orderRank',
      title: 'Order rank',
      type: 'number',
      description: 'Lower numbers sort first.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'number' },
  },
})
