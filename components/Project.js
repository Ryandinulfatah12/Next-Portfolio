import React from 'react'
import userData from '../constants/data'
export default function Project() {
  //   console.log(userData.project)
  return (
    <>
      <div className="">
        <div id="work">
          <h1 className="text-center text-4xl font-extrabold text-gray-800 dark:text-white lg:ml-1">
            Here you can see my &#128640;
          </h1>
          <div className="xs:grid-cols-1 grid items-center justify-center gap-4 py-2 px-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {userData.project.map((item) => (
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg dark:bg-slate-800">
                <img className="w-full" src={item.img} alt={item.nama} />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">{item.nama}</div>
                  <p className="text-base text-gray-700 dark:text-white">
                    {item.desc}
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                  {item.stack.split(',').map((item) => (
                    <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
