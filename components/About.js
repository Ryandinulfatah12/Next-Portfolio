import React, { useState, useEffect } from 'react'
import userData from '../constants/data'
import Timeline from './Timeline'
import ryan from '../public/ryandf.png'
import Image from 'next/image'

export default function About() {
  const [data, setData] = useState([])

  // fetch data from github api
  const urlGithub = `https://api.github.com/users/${userData.githubUsername}`
  const getUserGithub = async () => {
    const response = await fetch(urlGithub)
    const jsonData = await response.json()
    setData(jsonData)
  }
  useEffect(() => {
    getUserGithub()
  })
  return (
    <>
      <div className="mt-4 p-4">
        <h1 className="mb-6 text-center text-4xl font-semibold">
          Hey, glad to see 🙂
        </h1>
        <div className="flex flex-col items-center">
          <Image
            src={ryan}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={150}
            height={150}
            placeholder="blur"
          />
          <div className="my-3 italic">{userData.country}</div>
          <p>{userData.desc}</p>
          <div className="my-5">
            <Timeline />
          </div>
        </div>

        {/* Stack section */}
        <h2 className="mt-9 mb-5 text-center text-4xl font-semibold">
          Tech stack 😆
        </h2>
        <div className="xs:grid-cols-3 grid grid-cols-3 items-center justify-center gap-4 py-2 px-2 md:grid-cols-3 lg:grid-cols-2">
          {userData.techStack.map((item) => (
            <div className="justify-center overflow-hidden rounded-xl p-4 text-center shadow-md hover:shadow-lg dark:bg-slate-800">
              <img
                src={item.icon}
                alt={item.name}
                className="mx-auto mb-3 h-10 w-10"
              />
              <div className="flex flex-col items-center justify-center">
                {item.name}
              </div>
              <div className="italic text-slate-600 dark:text-slate-300">
                {item.year} experience
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
