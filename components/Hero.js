import React from 'react'
import ryan from '../public/ryan-vector-square.png'
import Image from 'next/image'
import userData from '../constants/data'

export default function Hero() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center text-center lg:mx-4 lg:flex-row lg:space-x-5 lg:text-left">
          <div className="lg:mt-12 lg:px-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
              Hi there, I'm {userData.name} &#128516;
            </h1>
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4">{userData.title}&#128640;</p>
            </div>
            <a
              href="https://drive.google.com/file/d/13luppqAyhMzzwm7m0EjdSLYd05TDYfuN/view?usp=share_link"
              className="h-10 rounded-md bg-gray-800 py-2  px-6 font-semibold text-white hover:bg-black"
            >
              Download PDF Version
            </a>
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
            <div className="mb-4 text-center font-bold">
              {userData.status}&#128640;.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
