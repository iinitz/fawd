import { AppProps } from 'next/app'
import Head from 'next/head'

import { AppLayout, BaseLayout } from '../components/Layout'
import { AppProvider } from '../contexts/AppContext'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <BaseLayout>
    <Head>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
    </Head>
    <AppProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProvider>
  </BaseLayout>
)

export default MyApp
