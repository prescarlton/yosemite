export interface GalleryImageFormat {
  ext: string
  hash: string
  height: number
  mime: string
  name: string
  width: number
  url: string
}

export interface GalleryImage {
  id: number
  name: string
  caption: string | null
  createdAt: string
  formats: {
    large: GalleryImageFormat
    medium: GalleryImageFormat
    small: GalleryImageFormat
    thumbnail: GalleryImageFormat
  }
}
export type ListGalleryImagesResponse = GalleryImage[]
