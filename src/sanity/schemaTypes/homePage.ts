import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'titleLines',
          title: 'Title lines (plain)',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'titleAccentLine',
          title: 'Title accent line',
          type: 'string',
        }),
        defineField({
          name: 'intro',
          title: 'Intro paragraph',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'primaryCta',
          title: 'Primary CTA',
          type: 'cta',
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary CTA',
          type: 'cta',
        }),
      ],
    }),
    defineField({
      name: 'deliveryStrip',
      title: 'Delivery strip',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'titleLine1', title: 'Title line 1', type: 'string' }),
        defineField({
          name: 'titleAccentLine',
          title: 'Title accent line',
          type: 'string',
        }),
        defineField({ name: 'intro', title: 'Intro paragraph', type: 'text', rows: 3 }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'cta',
        }),
        defineField({
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'blurb',
                  title: 'Blurb',
                  type: 'text',
                  rows: 2,
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: { title: 'label', subtitle: 'blurb' },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'selectedWork',
      title: 'Selected work block',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'titleLine1', title: 'Title line 1', type: 'string' }),
        defineField({
          name: 'titleAccentLine',
          title: 'Title accent line',
          type: 'string',
        }),
        defineField({
          name: 'viewAllLabel',
          title: 'View-all link label',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'footerCta',
      title: 'Footer CTA',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({
          name: 'titleLines',
          title: 'Title lines (plain)',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'titleAccentLine',
          title: 'Title accent line',
          type: 'string',
        }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 3 }),
        defineField({
          name: 'locationLine',
          title: 'Location line',
          type: 'string',
        }),
        defineField({
          name: 'emailLabel',
          title: 'Email button label',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page' }),
  },
})
