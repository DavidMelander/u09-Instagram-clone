import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>InstaGram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Header */}
    <Header />
    {/* Feed */}
    <Feed />

    {/* Model */}
    </div>
  )
}

export default Home
