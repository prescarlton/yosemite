import { Box, Card, Image, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { API_URL } from '@/constants'
import { GalleryImage } from '@/types/Image'

interface IImageCard {
  image: GalleryImage
}

const ImageCard = ({ image }: IImageCard) => {
  const [opened, { open, close }] = useDisclosure(false)
  const onClick = () => {
    open()
  }
  const { large, small, medium, thumbnail } = image.formats
  // fallback to the largest size available
  const largestImg = large || medium || small || thumbnail
  // we want to find the thumbnail format
  const src = `${API_URL}${largestImg.url}`

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto">
        <Image
          src={src}
          alt={image.caption || image.name}
          sx={{
            minWidth: 300,
          }}
        />
        {image.caption && (
          <Text mt="sm" size="lg">
            {image.caption}
          </Text>
        )}
      </Modal>
      <Card
        key={image.id}
        sx={(theme) => ({
          borderRadius: theme.radius.md,
          aspectRatio: '1',
        })}
        onClick={onClick}
      >
        <Box
          sx={(theme) => ({
            ...theme.fn.cover(),
            backgroundSize: 'cover',
            backgroundImage: `url(${src})`,
          })}
        />
      </Card>
    </>
  )
}

export default ImageCard
