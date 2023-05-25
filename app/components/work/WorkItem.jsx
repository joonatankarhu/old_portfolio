'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const WorkItem = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="flex flex-col items-start justify-center lg:items-center">
      <Link href="https://heybeautycollections.netlify.app/" target="_blank">
        <div
          className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ${
            isHovered ? 'scale-[102%]' : 'scale-100'
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
          <h3 className="font-bold text-3xl lg:text-4xl lg:mb-5">
            HeyBeautyCollections
          </h3>
          <p className="text-black/80 ">
            {/* This is responsive and functional eCommerce clothing store. It has
            Stripe, Webhooks, headless CMS, RESTful API's, language options and
            much more. */}
            {`I constructed an eCommerce store using a stack that included Next.js, React.js, Node.js, Sanity (content management system), Stripe, and TailWindCSS. My responsibilities involved utilizing a headless CMS (Sanity) to allow the client to manage their store. The frontend of the website automatically updates the product information through a REST API. The product pages are dynamic and display relevant data. The store includes product filtering and categories. The purchase process updates both the client and the customer through Stripe webhooks and email notifications. Stripe integration handles the payment system. The application is optimized for mobile devices and provides a responsive user experience.`}
          </p>
          <Link
            href="https://heybeautycollections.netlify.app/"
            target="_blank"
            className="text-white bg-black hover:bg-black/80 transition-all duration-300 py-2 px-5 rounded-md mt-4"
          >
            Live demo
          </Link>
        </div>
        <div className="lg:w-[20%] lg:flex lg:flex-wrap">
          <h4 className="font-medium text-xl mt-5 lg:mt-0">Technologies</h4>
          <div className="flex flex-row flex-wrap content-start lg:justify-center justify-start items-center gap-4 text-lg font-semibold w-full mt-4">
            <div className="w-[45%] lg:w-[100%] flex justify-start content-start items-center gap-1">
              <div className="w-[35px]">
                <img src="https://img.icons8.com/fluency-systems-filled/48/000000/nextjs.png" />
              </div>
              <p>Next.js</p>
            </div>
            <div className="w-[45%] lg:w-[100%]  flex justify-start content-start items-center gap-1">
              <div className="w-[35px]">
                <img src="https://img.icons8.com/color/48/000000/react-native.png" />
              </div>

              <p>React.js</p>
            </div>
            <div className="w-[45%] lg:w-[100%] flex justify-start content-start items-center gap-1">
              <div className="w-[35px]">
                <img src="https://img.icons8.com/fluency/48/null/express-js.png" />
              </div>
              <p>Express.js</p>
            </div>
            <div className="w-[45%] lg:w-[100%] flex justify-start content-start items-center gap-1">
              <div className="w-[35px]">
                <img src="https://img.icons8.com/fluency/100/null/node-js.png" />
              </div>
              <p>Node.js</p>
            </div>
            <div className="w-[45%] lg:w-[100%] flex justify-start content-start items-center gap-1">
              <div className="w-[35px]">
                <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" />
              </div>
              <p>TailWindCSS</p>
            </div>
            <div className="w-[45%] lg:w-[100%] flex justify-start content-start items-center gap-1">
              <div className="w-[35px]">
                <img src="/sanity.svg" />
              </div>
              <p>Sanity CMS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkItem
