import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Reestaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Restaurant Image',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of Restaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude of Restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a Number between 1-5',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('You need to enter a value between 1 & 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
