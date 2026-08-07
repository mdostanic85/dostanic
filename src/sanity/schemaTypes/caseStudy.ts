import { defineArrayMember, defineField, defineType } from 'sanity'

/**
 * Case study schema mirrors the per-route templates under /work/[slug]/page.tsx.
 * Sections that are not present on every case (Role scope, Process steps,
 * extra image blocks) are optional so existing routes with simpler templates
 * (e.g. soundscope) remain valid.
 *
 * `extraSections` is a closed enum of preset variants so editors cannot
 * compose arbitrary new layouts — this keeps the schema out of page-builder
 * territory while still allowing shared screen-grid blocks to be toggled.
 */
export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Source project this case study belongs to.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageHeader',
      title: 'Page header',
      type: 'pageHeader',
    }),
    defineField({
      name: 'metaFields',
      title: 'Meta fields',
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
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: 'label', subtitle: 'value' } },
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
        defineField({
          name: 'aspect',
          title: 'Aspect ratio class',
          type: 'string',
          options: {
            list: [
              { title: '16 / 9', value: 'aspect-[16/9]' },
              { title: '16 / 10', value: 'aspect-[16/10]' },
              { title: '16 / 8', value: 'aspect-[16/8]' },
              { title: '4 / 3', value: 'aspect-[4/3]' },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'context',
      title: 'Project context',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'lead', title: 'Lead', type: 'text', rows: 3 }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 5 }),
      ],
    }),
    defineField({
      name: 'roleScope',
      title: 'Role scope ("What I owned")',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'lead', title: 'Lead paragraph', type: 'text', rows: 4 }),
        defineField({
          name: 'points',
          title: 'Bullet points',
          type: 'array',
          of: [{ type: 'text', rows: 3 }],
        }),
      ],
    }),
    defineField({
      name: 'challengesEyebrow',
      title: 'Challenges eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'challengesTitleLines',
      title: 'Challenges title lines',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'challengesTitleAccent',
      title: 'Challenges title accent line',
      type: 'string',
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
    }),
    defineField({
      name: 'processSteps',
      title: 'Process steps',
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
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'tools',
              title: 'Tools',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'number' } },
        },
      ],
    }),
    defineField({
      name: 'decisionsEyebrow',
      title: 'Decisions eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'decisionsTitleLines',
      title: 'Decisions title lines',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'decisionsTitleAccent',
      title: 'Decisions title accent line',
      type: 'string',
    }),
    defineField({
      name: 'decisions',
      title: 'Decisions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
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
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
    defineField({
      name: 'outcomesEyebrow',
      title: 'Outcomes eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'outcomesTitleLines',
      title: 'Outcomes title lines',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'outcomesTitleAccent',
      title: 'Outcomes title accent line',
      type: 'string',
    }),
    defineField({
      name: 'outcomesBody',
      title: 'Outcomes body paragraph',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [{ type: 'text', rows: 2 }],
    }),
    defineField({
      name: 'extraSections',
      title: 'Extra sections',
      type: 'array',
      description:
        'Closed list of preset sections that match existing React components. Editors pick from this list — they cannot define new layouts.',
      of: [
        defineArrayMember({
          name: 'imageBlock',
          title: 'Image block',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
              ],
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'aspect',
              title: 'Aspect ratio class',
              type: 'string',
              options: {
                list: [
                  { title: '16 / 9', value: 'aspect-[16/9]' },
                  { title: '16 / 10', value: 'aspect-[16/10]' },
                  { title: '16 / 8', value: 'aspect-[16/8]' },
                  { title: '4 / 3', value: 'aspect-[4/3]' },
                ],
              },
            }),
          ],
          preview: { select: { title: 'caption', media: 'image' } },
        }),
        defineArrayMember({
          name: 'placeholderBlock',
          title: 'Placeholder block',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({
              name: 'aspect',
              title: 'Aspect ratio class',
              type: 'string',
              options: {
                list: [
                  { title: '16 / 9', value: 'aspect-[16/9]' },
                  { title: '16 / 10', value: 'aspect-[16/10]' },
                  { title: '16 / 8', value: 'aspect-[16/8]' },
                  { title: '4 / 3', value: 'aspect-[4/3]' },
                ],
              },
            }),
          ],
          preview: { select: { title: 'label' } },
        }),
      ],
    }),
    defineField({
      name: 'nextCase',
      title: 'Next case',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Project shown in the "Next: …" link at the foot of the page.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: { title: 'project.title', subtitle: 'project.year' },
  },
})
