import { type SchemaTypeDefinition } from 'sanity'
import { experience } from './experience'
import { project } from './project'
import { skill } from './skill'
import { social } from './social'
import { postInfo } from './postInfo'

export const schema: { types: SchemaTypeDefinition[] } ={
  types: [experience, project, skill, social,postInfo],
}

