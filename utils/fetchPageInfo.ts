import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { PostInfo } from '@/typings'

const query = groq`
  *[_type == "postInfo"]
`

export const fetchPageInfo = async (): Promise<PostInfo | null> => {
  try {
    const pageInfo: PostInfo[] = await client.fetch(query)
    return pageInfo[0] ?? null
  } catch (error) {
    console.error('fetchPageInfo error:', error)
    return null
  }
}