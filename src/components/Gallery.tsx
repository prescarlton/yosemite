import { SimpleGrid, Skeleton, Text } from '@mantine/core'

import ImageCard from '@/components/ImageCard'
import useListImages from '@/hooks/useListImages'

const Gallery = () => {
  const { data: images, isLoading } = useListImages()
  return !images?.length && !isLoading ? (
    <Text align="center">
      We {`haven't`} taken any pictures yet. Hang tight!
    </Text>
  ) : (
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
      {isLoading ? (
        <>
          <Skeleton sx={{ aspectRatio: '1' }} />
          <Skeleton sx={{ aspectRatio: '1' }} />
          <Skeleton sx={{ aspectRatio: '1' }} />
          <Skeleton sx={{ aspectRatio: '1' }} />
          <Skeleton sx={{ aspectRatio: '1' }} />
          <Skeleton sx={{ aspectRatio: '1' }} />
          <Skeleton sx={{ aspectRatio: '1' }} />
          <Skeleton sx={{ aspectRatio: '1' }} />
          <Skeleton sx={{ aspectRatio: '1' }} />
          <Skeleton sx={{ aspectRatio: '1' }} />
        </>
      ) : (
        images?.map((image) => <ImageCard key={image.id} image={image} />)
      )}
    </SimpleGrid>
  )
}

export default Gallery
