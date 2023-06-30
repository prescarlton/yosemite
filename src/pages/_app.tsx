import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const prefColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>(
    prefColorScheme
  )
  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  const queryClient = new QueryClient()

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
