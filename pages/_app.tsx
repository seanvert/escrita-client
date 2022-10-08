import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from 'firebase-admin'

const GOOGLE_APPLICATION_CREDENTIALS = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);
initializeApp(GOOGLE_APPLICATION_CREDENTIALS);

// TODO aqui que vai o contexto
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
        <Component {...pageProps} />
        </ChakraProvider>
        )
}
    
export default MyApp
