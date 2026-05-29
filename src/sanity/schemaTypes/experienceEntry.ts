import { defineField, defineType } from 'sanity'

export const experienceEntry = defineType({
  name: 'experienceEntry',
  title: 'Experience Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'string',
      description: 'e.g. "Mar 2024 — present".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderRank',
      title: 'Order rank',
      type: 'number',
      description: 'Lower numbers sort first.',
    }),
  ],
  preview: {
    select: { title: 'company', subtitle: 'period' },
  },
})
