import * as React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { CacheProvider } from "@emotion/react"
import createEmotionCache from "../src/createEmotionCache"
import Layout from "../src/Layout"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

let clientPaletteMode
if (typeof window !== "undefined") {
  clientPaletteMode = localStorage.getItem("mode") || "unset"
}

export default function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    initialPaletteMode = clientPaletteMode,
    pageProps
  } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout initialPaletteMode={initialPaletteMode}>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
}
