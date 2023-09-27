import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../componets/layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewpoint' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )

}
