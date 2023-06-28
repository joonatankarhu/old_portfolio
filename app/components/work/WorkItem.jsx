'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const WorkItem = () => {
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
      name: 'Tailwind',
      imageSrc: 'https://img.icons8.com/color/48/000000/tailwindcss.png',
    },
    {
      name: 'Sanity',
      imageSrc: '/sanity.svg',
    },
  ]

  return (
    <div className="flex flex-col items-start justify-center lg:items-center">
      <Link href="https://heybeautycollections.netlify.app/" target="_blank">
        <div
          className={`relative rounded-md overflow-hidden lg:rounded-lg shadow-lg lg:shadow-xl transition-transform duration-300 ${
            isHovered ? 'scale-[102%] lg:scale-[102%]' : 'scale-[100%] lg:scale-[100%]'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/heybeauty.jpg"
            width={1300}
            height={1300}
            alt="Project picture"
          />
        </div>
      </Link>
      <div className="lg:flex mt-5 lg:mt-10">
        <div className="flex flex-col items-start gap-1 lg:w-[80%] lg:pr-20">
          <h3 className="font-bold text-xl smaller:text-2xl almostIpad:text-3xl md:text-4xl lg:mb-5">
            HeyBeautyCollections
          </h3>
          <p className="text-black/80  mobileX:text-lg">
            {`I constructed an eCommerce store using a stack that included Next.js, React.js, Node.js, Sanity (content management system), Stripe, and TailWindCSS. My responsibilities involved utilizing a headless CMS (Sanity) to allow the client to manage their store. The frontend of the website automatically updates the product information through a REST API. The product pages are dynamic and display relevant data. The store includes product filtering and categories. The purchase process updates both the client and the customer through Stripe webhooks and email notifications. Stripe integration handles the payment system. The application is optimized for mobile devices and provides a responsive user experience.`}
          </p>
          <Link
            href="https://heybeautycollections.netlify.app/"
            target="_blank"
            className="text-white w-full text-center font-semibold bg-black hover:bg-blue-700 transition-all duration-300 py-2 rounded-md mt-4 smaller:py-2 smaller:text-base lessSmall:mt-6 lessSmall:mb-4 mobileX:py-3 almostIpad:max-w-[400px] lg:max-w-[300px]"
          >
            Live demo
          </Link>
        </div>
        <div className="lg:w-[20%] lg:flex lg:flex-wrap">
          <h4 className="font-medium text-xl smaller:text-2xl md:text-3xl mt-5 lg:mt-0">
            Technologies
          </h4>
          <div className="flex flex-row flex-wrap content-start lg:justify-center justify-start items-center gap-4 smaller:gap-6 text-base font-semibold w-full mt-4">
            {skills &&
              skills.map((skill) => (
                <div className="w-full smaller:w-[45%] small:w-[45%] lg:w-[100%] flex justify-start content-start items-center gap-[6px] smaller:gap-2">
                  <div className="w-[14%] smaller:w-[20%] min-w-[35px] small:min-w-[40px]">
                    <img src={skill.imageSrc} />
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkItem
