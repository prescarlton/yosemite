import { createGetInitialProps } from '@mantine/next'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  const getInitialProps = createGetInitialProps()
  return (
    <Html lang="en">
      <Head title="Yosemite" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
