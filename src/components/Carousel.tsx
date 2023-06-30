import { Carousel } from '@mantine/carousel'
import {
  Button,
  Card,
  createStyles,
  getStylesRef,
  Paper,
  rem,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import PostCard from '@/components/PostCard'
import { API_URL } from '@/constants'

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundSize: 'cover',
  },
  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease',
  },
  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },
  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },
}))

interface IImageCard {
  name: string
  caption: string
  url: string
}

interface ICardCarousel {
  items: IImageCard[]
}

const ImageCard = ({ name, url, caption }: IImageCard) => {
  const { classes } = useStyles()

  return (
    <Card p="lg" shadow="lg" className={classes.card} radius="md">
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${API_URL}${url})` }}
      />
      {caption && (
        <>
          <div className={classes.overlay} />

          <div className={classes.content}>
            <Text size="lg" className={classes.title}>
              {caption}
            </Text>
          </div>
        </>
      )}
    </Card>
  )
}

const CardCarousel = ({ items }: ICardCarousel) => {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const slides = items.map((item) => (
    <Carousel.Slide key={item.name}>
      <ImageCard {...item} />
    </Carousel.Slide>
  ))

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  )
}
export default CardCarousel
