import SessionProvider from '../context/Session';
import '../src/styles/global.css'

export default function MyApp({ Component, pageProps }) {
    return <>
      <SessionProvider><Component {...pageProps} /></SessionProvider>
    </>;
  }