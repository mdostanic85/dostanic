import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageHeader',
      title: 'Page header',
      type: 'pageHeader',
    }),
    defineField({
      name: 'storyEyebrow',
      title: 'Story eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'storySinceLabel',
      title: 'Story "since" label',
      type: 'string',
      description: 'e.g. "since — 2003"',
    }),
    defineField({
      name: 'storyLead',
      title: 'Story lead paragraph',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'storyParagraphs',
      title: 'Story paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
    }),
    defineField({
      name: 'principles',
      title: 'Principles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Number',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'number' },
          },
        },
      ],
    }),
    defineField({
      name: 'experienceEyebrow',
      title: 'Experience eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'experienceIntro',
      title: 'Experience intro',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'About Page' }),
  },
})
