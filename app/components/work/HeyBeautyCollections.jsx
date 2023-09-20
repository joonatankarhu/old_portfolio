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
      <Link href="https://heybeautycollections.netlify.app/" target="_blank">
        <div
          className={`relative rounded-md overflow-hidden lg:rounded-lg shadow-lg lg:shadow-xl border-[1.5px] border-gray-200/60 transition-transform duration-300 ${
            isHovered ? 'scale-[102%] lg:scale-[102%]' : 'scale-[100%] lg:scale-[100%]'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/heybeauty.jpg"
            width={1300}
            height={1300}
            alt="Project image"
          />
        </div>
      </Link>
      <div className="lg:flex mt-5 lg:mt-10">
        <div className="flex flex-col items-start gap-1 lg:w-[80%] lg:pr-20">
          <h3 className="font-bold text-xl smaller:text-2xl almostIpad:text-3xl md:text-4xl md:mb-1 lg:mb-2">
            HeyBeautyCollections
          </h3>
          <p className='mb-2 md:text-lg'>Role: <span><strong>Full-stack Developer</strong></span></p>
          <p className="text-black/80 mobileX:text-lg lg:text-base">
            I built a clothing store for HeyBeautyCollections. I used Next.js, TypeScript, Node, Sanity CMS, Stripe and TailWindCSS. 
            The business owner did not have coding knowledge, so I implemented Sanity CMS as a backend, to allow the owner to manage their store and products.
            <br/>
            The application has dynamic data and responsive pages and layouts. The store includes product filtering and categories.
            <br/><br/>
            After an purchase, the owner and the customer receives a receipt of the purchase to their email inbox through Stripe webhooks.
            <br/>
            <br/>
            The application is optimized for mobile devices but is also responsive to larger devices.
          </p>
          <Link
            href="https://heybeautycollections.netlify.app/"
            target="_blank"
            className="hidden lg:block text-white w-full text-center font-bold bg-black hover:bg-red-500 transition-all duration-300 py-2 rounded-md mt-1 smaller:py-2 smaller:text-base lessSmall:mt-3 lessSmall:mb-4 my-3 mobileX:py-3 almostIpad:max-w-[400px] lg:max-w-[300px]"
          >
            Live demo
          </Link>
        </div>
        <div className="lg:w-[20%] lg:flex lg:flex-wrap">
          <div className='lg:hidden mt-3'></div>
          <SmallTitle title='Technologies:' />
          {/* <div className='hidden lg:block'>
            <SmallTitle title='Technologies:' />
          </div> */}
          <div className="flex flex-row flex-wrap content-start lg:justify-center justify-start items-center gap-4 smaller:gap-5 lg:gap-4 text-base font-semibold w-full mt-4 lg:mt-0">
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
