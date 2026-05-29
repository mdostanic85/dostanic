import { defineField, defineType } from 'sanity'

/**
 * Free-form href — internal paths ("/work") and mailto/external URLs are
 * both valid, so no URL validation is enforced.
 */
export const cta = defineType({
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
