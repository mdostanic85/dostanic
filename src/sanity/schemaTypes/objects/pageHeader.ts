import { defineField, defineType } from 'sanity'

/**
 * Page header headline keeps the existing visual rhythm — explicit line
 * array plus an optional accent line — instead of free rich text. This
 * preserves the gradient span on the final line on About / Work / Expertise.
 */
export const pageHeader = defineType({
  name: 'pageHeader',
  title: 'Page header',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'Mono caption above the headline — e.g. "About / Background".',
    }),
    defineField({
      name: 'titleLines',
      title: 'Title lines (plain)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Each entry renders as one line of the headline.',
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'titleAccentLine',
      title: 'Title accent line',
      type: 'string',
      description: 'Optional final line rendered with the accent gradient.',
    }),
    defineField({
      name: 'intro',
      title: 'Intro paragraph',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'topRightLabel',
      title: 'Top-right label',
      type: 'string',
      description: 'Year, count, or location displayed in the header meta row.',
    }),
  ],
})
