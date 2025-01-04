// pages/SearchApp.jsx

import Head from 'next/head'
import Hero from '@/components/search'

export default function SearchApp() {
  return (
    <>
      <Head>
        <title>Search App - HMB-CO</title>
        <meta name="description" content="Looking for the right answer instantly? Our extremely powerful Search Engine gets straight to the point without clickbait, tracking, and sponsored links." />
      </Head>
      <Hero />

    </>
  )
}
