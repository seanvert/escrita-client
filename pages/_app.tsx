import '../styles/globals.css'
import type { AppProps } from 'next/app'

// TODO aqui que vai o contexto
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
        )
}
    
export default MyApp
