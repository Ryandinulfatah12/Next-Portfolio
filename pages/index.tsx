import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Ryan Dinul Fatah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto mt-16 max-w-4xl antialiased">
        <Hero />
      </main>
    </div>
  )
}
