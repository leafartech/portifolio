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
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
 
export default MyDocument