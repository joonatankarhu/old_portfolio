'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SmallTitle from '../SmallTitle'

const HeyBeautyCollections = () => {
  const [isHovered, setIsHovered] = useState(false)

  const skills = [
    {
      name: 'Next.js',
      imageSrc:
        'https://img.icons8.com/fluency-systems-filled/48/000000/nextjs.png',
    },
    {
      name: 'React.js',
      imageSrc: 'https://img.icons8.com/color/48/000000/react-native.png',
    },
    {
      name: 'Express.js',
      imageSrc: 'https://img.icons8.com/fluency/48/null/express-js.png',
    },
    {
      name: 'Node.js',
      imageSrc: 'https://img.icons8.com/fluency/100/null/node-js.png',
    },
    {
      name: 'TailwindCSS',
      imageSrc: 'https://img.icons8.com/color/48/000000/tailwindcss.png',
    },
    {
      name: 'Sanity CMS',
      imageSrc: '/sanity.svg',
    },
  ]

  return (
    <div className="flex flex-col items-start justify-center lg:items-center pt-5">
        <div
          className="relative rounded-md overflow-hidden lg:rounded-lg shadow-lg lg:shadow-xl border-[1.5px] border-gray-200/60 transition-transform duration-300"
        >
          <img
            src="/heybeauty.jpg"
            width={1300}
            height={1300}
            alt="Project image"
          />
        </div>
      <div className="lg:flex lg:justify-between mt-5 lg:mt-10">
        <div className="flex flex-col items-start gap-1 lg:pr-20">
          <h3 className="font-bold text-xl smaller:text-2xl almostIpad:text-3xl md:text-4xl md:mb-1 lg:mb-2">
            HeyBeautyCollections
          </h3>
          <p className='mb-2 md:text-lg lg:mt-2'><span>Hobby project</span></p>
          <p className="text-black/80 mobileX:text-lg lg:text-base lg:max-w-3xl">
            I built a clothing store with Next.js, TypeScript, Node, Sanity CMS, Stripe and TailWindCSS.
            I implemented Sanity CMS as a backend, to allow the owner to manage their store and products with ease.
            The application has dynamic data and responsive pages and layouts. The store includes product filtering and categories.
            <br/><br/>
            After an purchase, the owner and the customer receives a receipt of the purchase to their email inbox through Stripe webhooks.
            <br/>
            <br/>
            The application is optimized for mobile devices but is also responsive to larger devices. This project is not available as a public repository, because I might sell it at some point to a client.
          </p>
          <Link
            href="https://heybeautycollections.netlify.app/"
            target="_blank"
            className="hidden lg:block text-white w-full text-center font-bold bg-black hover:bg-blue-600 transition-all duration-300 py-2 rounded-md mt-1 smaller:py-2 smaller:text-base lessSmall:mt-3 lessSmall:mb-4 my-3 mobileX:py-3 almostIpad:max-w-[400px] lg:max-w-[200px] lg:mt-8"
          >
            Live demo
          </Link>
        </div>
        <div className="lg:max-w-[20%] lg:flex lg:flex-wrap">
          <div className="flex flex-row flex-wrap content-start lg:justify-center justify-start items-center gap-4 smaller:gap-5 lg:gap-4 text-base font-semibold w-full mt-4 lg:mt-5">
            {skills &&
              skills.map((skill) => (
                <div className="w-full smaller:w-[45%] small:w-[45%] lg:w-[100%] flex justify-start content-start items-center gap-[6px] smaller:gap-2 lg:gap-3">
                  <div className="w-[14%] smaller:w-[20%] lg:w-[10%] min-w-[35px] lg:min-w-[2.4em] small:min-w-[40px]">
                    <img src={skill.imageSrc} />
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
              <Link
                href="https://heybeautycollections.netlify.app/"
                target="_blank"
                className="lg:hidden w-full text-white text-center font-semibold bg-black hover:bg-blue-700 transition-all duration-300 py-2 rounded-md mt-1 smaller:py-2 smaller:text-base lessSmall:mt-3 lessSmall:mb-4 my-3 mobileX:py-3 almostIpad:max-w-[400px]"
              >
                Live demo
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeyBeautyCollections
