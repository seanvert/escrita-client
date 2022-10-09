import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../layouts/Main'

// import das lib de teste
import { LoremIpsum } from 'react-lorem-ipsum'

const Home: NextPage = () => {
  return (
      <Main title="Escrita">
		  <LoremIpsum p={2} />
      </Main>
  )
}

export default Home
