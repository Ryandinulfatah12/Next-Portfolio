import React, { useState, useEffect } from 'react'
import userData from '../constants/data'
import Timeline from './Timeline'
import ryan from '../public/ryan-new.jpeg'
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
  }, [])
  return (
    <>
      <div className="mt-4 p-4">
        <h1 className="mb-6 text-center text-4xl font-semibold">
          Hey, glad to see &#128516;
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
          <a
            href={data.html_url}
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 mt-5"
          >
            <span
              class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-gray-600"
            ></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                  {data.name}
                </h3>

                <p class="mt-1 text-xs font-medium text-gray-600">@{data.login}</p>
              </div>

              <div class="hidden sm:block sm:shrink-0">
                <img
                  alt={data.name}
                  src={data.avatar_url}
                  class="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div class="mt-4">
              <p class="max-w-[40ch] text-sm text-gray-500">
                {data.bio}
              </p>
            </div>

            <dl class="mt-6 flex gap-4 sm:gap-6">
              <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">{data.followers}</dt>
                <dd class="text-xs text-gray-500">followers</dd>
              </div>

              <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">{data.following}</dt>
                <dd class="text-xs text-gray-500">following</dd>
              </div>
              <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">{data.public_repos}</dt>
                <dd class="text-xs text-gray-500">repositoy</dd>
              </div>
            </dl>
          </a>
          <div className="my-5">
            <Timeline />
          </div>
        </div>

        {/* Stack section */}
        <h2 className="mt-9 mb-5 text-center text-4xl font-semibold">
          Language & Tools 😆
        </h2>
        <div className="xs:grid-cols-3 grid grid-cols-3 items-center justify-center gap-4 py-2 px-2 md:grid-cols-3 lg:grid-cols-2">
          {userData.techStack.map((item) => (
            <div className="justify-center overflow-hidden rounded-xl p-4 text-center shadow-md duration-500 ease-in-out hover:scale-105 hover:cursor-default hover:shadow-xl dark:bg-slate-800">
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
