import { useQuery } from '@tanstack/react-query'

import { fetchStrapi } from '@/api'
import { IMAGES_QUERY_KEY } from '@/constants'
import { GalleryImage, ListGalleryImagesResponse } from '@/types/Image'

const listImages = () => {
  return fetchStrapi<ListGalleryImagesResponse>('/upload/files').then(
    (res) => res.data
  )
}

const useListImages = () => {
  return useQuery(IMAGES_QUERY_KEY.all, listImages)
}

export default useListImages
