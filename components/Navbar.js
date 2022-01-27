import React from 'react'
import ThemeSwitch from '../components/ThemeSwitch'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 bg-white py-2 dark:bg-black md:mb-6 md:py-6">
        <div className="container mx-auto flex items-center justify-between px-4 lg:max-w-4xl">
          <Link href="/">
            <a
              className={
                'colors font-medium uppercase tracking-wider text-gray-900 transition hover:text-sky-500 dark:text-white'
              }
            >
              Ryan
            </a>
          </Link>
          <div className="flex items-center">
            <div className="space-x-4 font-medium text-gray-800 dark:text-white sm:block md:flex lg:flex">
              <Link href="/work">
                <a
                  className={
                    'colors font-medium tracking-wider text-gray-900 transition hover:text-sky-500 dark:text-white'
                  }
                >
                  Work
                </a>
              </Link>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
