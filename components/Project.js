import React from 'react'
import userData from '../constants/data'
import Image from 'next/image'
export default function Project() {
  //   console.log(userData.project)
  return (
    <>
      <div className="">
        <div id="work">
          <h1 className="text-center text-4xl font-extrabold text-gray-800 dark:text-white lg:ml-1">
            Here you can see my work&#128640;
          </h1>
          {/* New Card */}
          {userData.project.map((item) => (
            <div key={item.id} className="mb-4 flex flex-col justify-center">
              <div className="relative mx-auto flex max-w-xs flex-col space-y-3 rounded-xl border border-white bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-700 md:max-w-3xl md:flex-row md:space-x-5 md:space-y-0">
                <div className="grid w-full place-items-center bg-white dark:bg-slate-700 md:w-1/3">
                  <img
                    src={item.img}
                    alt={item.nama}
                    width={500}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex w-full flex-col space-y-2 bg-white p-3 dark:bg-slate-700  md:w-2/3">
                  <div className="item-center flex justify-start">
                    {item.stack.split(',').map((item) => (
                      <div className="mr-1 hidden rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800 md:block">
                        {item}
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-black text-gray-800 dark:text-white md:text-3xl">
                    {item.nama}
                  </h3>
                  <p className="text-base text-gray-500 dark:text-white md:text-lg">
                    {item.desc}
                  </p>

                  <div className="px-6 pt-4 pb-2 md:hidden lg:hidden">
                    {item.stack.split(',').map((item) => (
                      <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="my-3">
                    <a href={item.url} className="hover:underline">
                      ✌🏻 Demo / URL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End */}
        </div>
      </div>
    </>
  )
}
