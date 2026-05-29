import { defineField, defineType } from 'sanity'

export const PROJECT_CATEGORIES = [
  'Product Design',
  'Analytics',
  'Healthcare',
  'Fintech',
  'Design Systems',
  'Web',
] as const

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'domain',
      title: 'Domain',
      type: 'string',
      description: 'e.g. SaaS, Analytics, Fintech.',
    }),
    defineField({
      name: 'discipline',
      title: 'Discipline',
      type: 'string',
      description: 'Short caption under the card title — e.g. "Product Design".',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Leave blank for capability entries.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on home',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isCapability',
      title: 'Is capability',
      type: 'boolean',
      initialValue: false,
      description: 'Renders a "Capability" badge instead of the year.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: PROJECT_CATEGORIES.map((c) => ({ title: c, value: c })),
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'behanceUrl',
      title: 'Behance URL',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'caseStudy',
      title: 'Case study',
      type: 'reference',
      to: [{ type: 'caseStudy' }],
      description: 'Optional — leave empty for display-only tiles (no detail page).',
    }),
    defineField({
      name: 'orderRank',
      title: 'Order rank',
      type: 'number',
      description: 'Lower numbers sort first.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'year', media: 'coverImage' },
  },
})
