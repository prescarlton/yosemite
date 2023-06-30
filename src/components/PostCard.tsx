import {
  Card,
  Center,
  createStyles,
  getStylesRef,
  Group,
  rem,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { useRouter } from 'next/router'

import { API_URL } from '@/constants'
import { Post } from '@/types/Post'

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    minHeight: rem(280),
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease',
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
}))

interface IPostCard {
  post: Post
}

const PostCard = ({ post }: IPostCard) => {
  const { classes, theme } = useStyles()
  const image = post.attributes.images.data[0].attributes.url
  const { push } = useRouter()

  const onClick = () => {
    push(`/${post.id}`)
  }
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      onClick={onClick}
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${API_URL}${image})` }}
      />

      <div className={classes.overlay} />

      <div className={classes.content}>
        <Text size="lg" className={classes.title} weight={500}>
          {post.attributes.Title}
        </Text>
      </div>
    </Card>
  )
}
export default PostCard
