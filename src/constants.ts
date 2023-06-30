import { createQueryKey } from '@/utils/createQueryKey'

export const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'

export const POSTS_QUERY_KEY = createQueryKey('posts')
export const IMAGES_QUERY_KEY = createQueryKey('images')
