export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Your Name',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Your Pic',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description of yourself',
      }
    ],
  }