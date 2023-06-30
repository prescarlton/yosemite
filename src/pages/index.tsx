import { Space } from '@mantine/core'

import Gallery from '@/components/Gallery'
import { Page } from '@/components/Page'

export default function Home() {
  return (
    <Page>
      <Space h="sm" />
      <Gallery />
    </Page>
  )
}
