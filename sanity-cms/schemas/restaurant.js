import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitute of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required().max(300).error("Maximum 300 character only allowed!"),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5).error("Please enter between 1 to 5"),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type:"category"}]
    })
  ],
})
