export interface Post {
  id: number
  attributes: {
    Title: string
    Description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    images: {
      data: {
        attributes: {
          name: string
          caption: string
          url: string
        }
      }[]
    }
  }
}
