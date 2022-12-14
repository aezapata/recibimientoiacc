import { ColorModeScript, theme } from '@chakra-ui/react'
import { Html, Main, NextScript, Head } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
       <Head>
        <title>Recibimiento IACC</title>
        <meta name="description" content="Instituto atletico central cordoba" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}