import React from 'react'
import Head from 'next/head'
import Timeline from '../components/Timeline'

export default function experience() {
  return (
    <>
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Experience</title>
          <link rel="icon" href="/favicon.ico" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main className="mx-auto mt-16 max-w-4xl antialiased">
          <Timeline />
        </main>
      </div>
    </>
  )
}
