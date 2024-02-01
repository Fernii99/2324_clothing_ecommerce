import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ecommerce Mike',

  projectId: 'i5d1wq3t',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
