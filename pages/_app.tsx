import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { EventContextProvider } from '@/utils/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EventContextProvider>
      <Component {...pageProps} />
    </EventContextProvider>
  )
}
