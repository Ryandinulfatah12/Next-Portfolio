import React, { useState } from 'react';
import Link from 'next/link';
import ryan from '../public/ryan-vector-square.png'
import Image from 'next/image'
import userData from '../constants/data'

export default function Hero() {
  const navLinks = userData.navLink;
  const [activeLinks, setActiveLinks] = useState(Array(navLinks.length).fill(false));

  const linkClick = (index) => {
    const newActiveLinks = [...activeLinks];
    newActiveLinks[index] = !newActiveLinks[index];
    setActiveLinks(newActiveLinks);
    handleClick();
  };
  return (
    <>
      <div className="container mx-auto px-4">
          <div className="text-center">
              <Image
                src={ryan}
                alt="Profile"
                priority={true}
                className="rounded"
                width={250}
                height={250}
                placeholder="blur"
              />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
                Hi, I'm {userData.fullname}
              </h1>
              <div className="my-6 text-gray-800 dark:text-white">
                <p className="mb-4">{userData.title}</p>
              </div>
              <Link href="/about" onClick={linkClick}>
                <a
                  className="h-10 rounded-md bg-gray-800 py-2 px-6 font-semibold text-white hover:bg-black transition duration-300"
                >
                  Get more about me
                </a>
              </Link>
              
           </div>

           <div className="text-center my-24">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                Feel free to ask me anything!
              </h3>
              <div className="my-6 text-gray-800 dark:text-white">
                <p className="mb-4">I'm willing to hear about new opportunities from you, don't hesitate to send me a message</p>
              </div>
              <a
                href="/link"
                className="h-10 rounded-md border border-gray-800 bg-white py-2 px-6 font-semibold text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
              >
                Get in Touch
              </a>
           </div>
      </div>
    </>
  )
}
