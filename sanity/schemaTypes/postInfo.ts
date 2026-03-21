import { defineField, defineType } from 'sanity'

export const postInfo = defineType({
  name: 'postInfo',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options:{
        hotspot: true,
      }
    }),
      defineField({
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'string',
    }),
    defineField({
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options:{
        hotspot: true,
      }
    }),
          defineField({
      name: 'PhoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    }),
          defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
      defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
      defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of:[{
        type: 'reference', to: {type:'social'}
      }]
    }),
  ],
})
