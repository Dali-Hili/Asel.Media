export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'block' }], // This allows for rich text editing
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true, // Enables image cropping
      },
    },
    {
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'section',
      title: 'Section Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Home', value: 'Home' },
          { title: 'InfoEnContinu', value: 'InfoEnContinu' },
          { title: "L'Instant ASEL", value: "L'Instant ASEL" },
          { title: 'Diaspora', value: 'Diaspora' },
          { title: 'Tech & Co', value: 'Tech & Co' },
          { title: 'Sports', value: 'Sports' },
          { title: 'Lifestyle', value: 'Lifestyle' },
        ],
        layout: 'radio', // Display as radio buttons
        direction: 'horizontal',
      },
      description: 'Select the Section Name for this post',
    },
    {
      name: 'layoutType',
      title: 'Layout Type',
      type: 'string',
      options: {
        list: [
          { title: 'Top', value: 'top' },
          { title: 'Bottom', value: 'bottom' },
        ],
        layout: 'radio', // Display as radio buttons
      },
      description:
        'Specify if this article should be displayed at the top or bottom of the main section',
    },
  ],
}
