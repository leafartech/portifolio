import type { AppProps } from 'next/app'
import '../src/styles/globals.css'
import Head from 'next/head'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <title>Rafael Borges Bezerra</title>
        <script dangerouslySetInnerHTML={{__html: `
          <!-- Google Tag Manager -->
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5GSSTLJ');</script>
          <!-- End Google Tag Manager -->
        `}} />
        <script dangerouslySetInnerHTML={{__html: `
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GSSTLJ"
          height="0" width="0"></iframe></noscript>
          {/* // <!-- End Google Tag Manager (noscript) --> */}
        `}} />
    </Head>
    <Component {...pageProps} />
  </>
  )
}