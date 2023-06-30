import { useQuery } from '@tanstack/react-query'

import { fetchStrapi } from '@/api'
import { Post } from '@/types/Post'

const listPosts = () => {
  return fetchStrapi<Post[]>('/posts?populate=*').then((res) => res.data.data)
}

const useListPosts = () => {
  return useQuery(['posts'], listPosts)
}

export default useListPosts
