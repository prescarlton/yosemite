import {
  ActionIcon,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Header,
  Stack,
  Title,
} from '@mantine/core'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { ArrowLeft, ChevronLeft } from 'tabler-icons-react'

interface IPage {
  children?: ReactNode
  title?: string
  description?: string
  container?: boolean
}

export const Page = ({ children, title, description }: IPage) => {
  const { back, route } = useRouter()

  const onClickBack = () => {
    if (route === '/') return
    back()
  }
  return (
    <>
      <Head>
        <title>{title || 'Yosemite'}</title>
        <meta
          name="description"
          content={description || "Preston's 2023 Yosemite trip blog"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container mt="xl" size="xl">
        <Flex justify="space-between">
          <ActionIcon onClick={onClickBack}>
            {route != '/' && <ChevronLeft />}
          </ActionIcon>
          <Stack sx={{ alignItems: 'center' }}>
            <Title size="h1">{`Yosemite Trip '23`}</Title>
            <Title size="h5">{`We're driving 6,000 miles to see a fancy Taco Bell.`}</Title>
          </Stack>
          <ActionIcon></ActionIcon>
        </Flex>
        <Flex direction="column">
          <Flex direction="column" gap="md" pt="sm">
            <Box p="md">{children}</Box>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}
