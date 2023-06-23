import Document, { DocumentContext, DocumentInitialProps, Html, Main, Head, NextScript } from 'next/document'
 
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
 
    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body className="bg-gray-50 dark:bg-gray-900">
        {/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GSSTLJ"
height="0" width="0"></iframe></noscript>
{/* // <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
 
export default MyDocument