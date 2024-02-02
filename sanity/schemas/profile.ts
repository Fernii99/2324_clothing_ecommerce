export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Your Name',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Images',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description of yourself',
      }
    ],
  }