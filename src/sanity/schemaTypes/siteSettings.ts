import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'locationLine',
      title: 'Location line',
      type: 'string',
      description: 'e.g. "Based in Serbia · working remote with teams worldwide"',
    }),
    defineField({
      name: 'copyrightOwner',
      title: 'Copyright owner',
      type: 'string',
    }),
    defineField({
      name: 'linkedInUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'behanceUrl',
      title: 'Behance URL',
      type: 'url',
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default OG image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
