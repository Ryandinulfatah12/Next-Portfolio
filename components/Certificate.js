import React from 'react'
import userData from '../constants/data'
import Image from 'next/image'

export default function Certificate() {
  return (
    <>
      <div className="mt-4 p-4">
        <h1 className="mb-6 text-center text-4xl font-semibold">
          Here's my achievement 🏆
        </h1>

        <div className="container mx-auto">
          {/* <div className="grid lg:grid-cols-3"> */}
          {userData.sertifikasi.map((item) => (
            <div className="mx-4 mb-4 rounded-lg shadow-lg duration-500 ease-in-out hover:scale-105 hover:cursor-default hover:shadow-xl">
              <img
                className="h-full w-full object-contain"
                src={item.img}
                alt={item.title}
              />
              <div className="px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
                  {item.title}
                </h4>

                <span className="mr-2 inline-flex items-center justify-center rounded-full bg-slate-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
                  {item.platform}
                </span>
                <a href={item.url} className="pt-3 text-center hover:underline">
                  See Detail
                </a>
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </>
  )
}
