import React from 'react'
import { useEffect, useState } from 'react'
import ThemeSwitch from '../components/ThemeSwitch'
import Link from 'next/link'

export default function Navbar() {
  // navbar is mounted on client
  const [active, setActive] = useState(false)
  // handle click event
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <>
      <div className="sticky top-0 z-50 bg-white py-2 dark:bg-black md:mb-6 md:py-6">
        <div className="container mx-auto flex items-center justify-between px-4  lg:max-w-4xl">
          <Link href="/">
            <a
              className={
                'colors font-medium uppercase tracking-wider text-gray-900 transition hover:text-sky-500 dark:text-white'
              }
            >
              Ryan
            </a>
          </Link>
          <div className="hidden items-center lg:flex">
            <div className="space-x-4 font-medium text-gray-800 dark:text-white sm:block md:flex lg:flex">
              <Link href="/about">
                <a
                  className={
                    'colors font-medium tracking-wider text-gray-900 transition hover:text-sky-500 dark:text-white'
                  }
                >
                  About
                </a>
              </Link>
              <Link href="/work">
                <a
                  className={
                    'colors font-medium tracking-wider text-gray-900 transition hover:text-sky-500 dark:text-white'
                  }
                >
                  Work
                </a>
              </Link>
              <Link href="/achievement">
                <a
                  className={
                    'colors font-medium tracking-wider text-gray-900 transition hover:text-sky-500 dark:text-white'
                  }
                >
                  Achievement
                </a>
              </Link>

              <Link href="/link">
                <a
                  className={
                    'colors font-medium tracking-wider text-gray-900 transition hover:text-sky-500 dark:text-white'
                  }
                >
                  Get in touch
                </a>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div className="mx-2">
              <ThemeSwitch />
            </div>
            <button
              onClick={handleClick}
              className=" ml-auto inline-flex justify-between rounded p-2 text-gray-900 outline-none hover:bg-sky-600 hover:text-gray-200 lg:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive menu */}
        <div
          className={`${
            active ? '' : 'hidden'
          } container mx-auto flex items-center justify-between px-4 lg:max-w-4xl`}
        >
          <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
            <Link href="/about">
              <a
                className={
                  'flex w-full flex-col items-start rounded py-3 hover:underline lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center'
                }
              >
                About
              </a>
            </Link>
            <Link href="/work">
              <a
                className={
                  'flex w-full flex-col items-start rounded py-3 hover:underline lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center'
                }
              >
                Work
              </a>
            </Link>
            <Link href="/achievement">
              <a
                className={
                  'flex w-full flex-col items-start rounded py-3 hover:underline lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center'
                }
              >
                Achievement
              </a>
            </Link>
            <Link href="/link">
              <a
                className={
                  'flex w-full flex-col items-start rounded py-3 hover:underline lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center'
                }
              >
                Get in touch
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
