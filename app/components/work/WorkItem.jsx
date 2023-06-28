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
    <div className="flex flex-col items-start justify-center lg:items-center lg:pt-10">
      <Link href="https://heybeautycollections.netlify.app/" target="_blank">
        <div
          className={`relative rounded-md overflow-hidden lg:rounded-lg shadow-lg lg:shadow-xl lg:border-t-[1.5px] lg:border-gray-200/60 transition-transform duration-300 ${
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
          <h3 className="font-bold text-xl smaller:text-2xl almostIpad:text-3xl md:text-4xl lg:mb-5">
            HeyBeautyCollections
          </h3>
          <p className="text-black mobileX:text-lg lg:text-base">
            I built an eCommerce clothing store with Next.js, Sanity CMS, Stripe, and TailWindCSS. Sanity allows the client to manage their store, without needing any coding or programming knowledge.
            <br/>
            The product pages are dynamic and display relevant product data.
            The store includes product filtering, categories, there is shopping cart and checkout as well. After purchase, the app notifies both the business owner and the customer about the new purchase through Stripe webhooks and email notifications.
            <br/>
            I implemented Stripe to handle the payment gateway. The application is responsive to mobile devices, Ipads and computer screens.
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
                <div className="w-full smaller:w-[45%] small:w-[45%] lg:w-[100%] flex justify-start content-start items-center gap-[6px] smaller:gap-2 lg:gap-3">
                  <div className="w-[14%] smaller:w-[20%] lg:w-[10%] min-w-[35px] lg:min-w-[2.4em] small:min-w-[40px]">
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
