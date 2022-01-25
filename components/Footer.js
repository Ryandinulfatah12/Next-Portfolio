import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="lg:mt-18 mt-12 py-6  sm:py-12 sm:pb-36">
        <div className="mx-auto max-w-4xl px-4">
          <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8"></div>
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <p>Built with &hearts; then Next.js and Tailwind.</p>

            <div className="flex flex-wrap pt-2 font-medium sm:space-x-2 lg:pt-0">
              <a
                href="https://www.linkedin.com/in/ryandinulfatah/"
                className={'transition-colors hover:text-yellow-500'}
                target="_blank"
                rel="norefferer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Ryandinulfatah12"
                className={'transition-colors hover:text-yellow-500'}
                target="_blank"
                rel="norefferer"
              >
                Github
              </a>
              <a
                href="https://medium.com/@dinulfatahryan"
                className={'transition-colors hover:text-yellow-500'}
                target="_blank"
                rel="norefferer"
              >
                Medium
              </a>
              <a
                href="https://www.instagram.com/ryandinulfatah12/"
                className={'transition-colors hover:text-yellow-500'}
                target="_blank"
                rel="norefferer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
