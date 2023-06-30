import { Box, Card, createStyles, Grid, Image, SimpleGrid } from '@mantine/core'

import ImageCard from '@/components/ImageCard'
import { API_URL } from '@/constants'
import useListImages from '@/hooks/useListImages'

const Gallery = () => {
  const { data: images } = useListImages()
  return (
    <SimpleGrid
      breakpoints={[
        { minWidth: 'xs', cols: 1, spacing: 'xs', verticalSpacing: 'xs' },
        { minWidth: 'sm', cols: 2, spacing: 'xs', verticalSpacing: 'xs' },
        { minWidth: 'md', cols: 3, spacing: 'xs', verticalSpacing: 'xs' },
        { minWidth: 'lg', cols: 4, spacing: 'xs', verticalSpacing: 'xs' },
        {
          minWidth: 'xl',
          cols: 5,
          spacing: 'xs',
          verticalSpacing: 'xs',
        },
      ]}
    >
      {images?.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </SimpleGrid>
  )
}

export default Gallery
