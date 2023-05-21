import SessionProvider from '../context/Session'
import '../src/styles/GlobalStyle.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <SessionProvider>
            <Component {...pageProps} />
        </SessionProvider>
        </>
    )
  }