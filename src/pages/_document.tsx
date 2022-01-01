/* eslint-disable @next/next/no-page-custom-font */
import {
  Html, Head, Main, NextScript,
} from 'next/document'

const Document: React.FC = () => (
  <Html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500;600;700;800&family=Sarabun:wght@100;200;300;400;500;600;700;800&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" />
      {/* <link rel="apple-touch-icon" href="/images/logo/logo-192x192px.png" /> */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
      <meta name="theme-color" content="#d9b48f" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
