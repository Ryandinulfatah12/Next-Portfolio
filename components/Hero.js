import React from 'react'
import ryan from '../public/ryan-vector-square.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center text-center lg:mx-4 lg:flex-row lg:space-x-5 lg:text-left">
          <div className="lg:mt-12 lg:px-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
              Hi there, I'm Ryan &#128516;
            </h1>
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4">
                I am a software developer who loves to learn new things, besides
                that I also like movies, music, basketball and books&#128640;.
              </p>
            </div>
          </div>
          <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
            <Image
              src={ryan}
              alt="Profile"
              priority={true}
              className="rounded"
              width={250}
              height={250}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  )
}
