import { useQuery } from '@tanstack/react-query'

import { fetchStrapi } from '@/api'
import { POSTS_QUERY_KEY } from '@/constants'
import { Post } from '@/types/Post'

const getPost = (postId: string) => {
  return fetchStrapi<Post>(`/posts/${postId}?populate=*`).then(
    (res) => res.data.data
  )
}
const useGetPost = (postId: string) => {
  return useQuery(POSTS_QUERY_KEY.detail(postId), () => getPost(postId))
}

export default useGetPost
