import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" href="./images/favicon.ico" />
        <title>Rafael Bezerra</title>
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
