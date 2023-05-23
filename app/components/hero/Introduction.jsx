import Image from 'next/image'
import './Fade.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 2500)
  }, [])
  return (
    <div className="lg:w-1/2 lg:top-[-40px] mt-10 md:mt-20 lg:mt-0 lg:flex lg:flex-col lg:items-center relative">
      <div className="hidden lg:block w-[30%] xlg:w-[30%]">
        <Image
          src="/profile_pic_blackwhite.png"
          width={250}
          height={250}
          alt="Picture of the author"
        />
      </div>

      <div className="hidden lg:block relative w-0 h-0 mt-6 z-1">
        <div className="absolute border-transparent border-solid border-8 transform rotate-45 -translate-x-2 -translate-y-2 bg-gray-400"></div>
      </div>

      <div
        className={`${
          isVisible ? 'animate-fade' : 'opacity-0'
        } lg:hidden lg:mx-12 lg:bg-white lg:rounded-xl lg:border-2 lg:border-gray-400 lg:p-4 lg:z-10`}
      >
        <p className="text-lg text-black/60">
          Hi, I am a self-taught Web Developer with a passion for continuous
          learning and problem-solving. Recently, I completed the development of
          an eCommerce store and I am currently enrolled full-time in{' '}
          <Link
            href="https://buutti.com/en/it-consulting/"
            target="_blank"
            className="font-semibold hover:underline"
          >
            <span>Buutti</span>
          </Link>
          's Fullstack program.
        </p>
      </div>

      <div
        className={`hidden lg:block lg:mx-12 lg:bg-white lg:rounded-xl lg:border-2 lg:border-gray-400 lg:p-4 lg:z-10`}
      >
        <p className="text-lg text-black/60">
          Hi, I am a self-taught Web Developer with a passion for continuous
          learning and problem-solving. Recently, I completed the development of
          an eCommerce store and I am currently enrolled full-time in{' '}
          <Link
            href="https://buutti.com/en/it-consulting/"
            target="_blank"
            className="font-semibold hover:underline"
          >
            <span>Buutti</span>
          </Link>
          's Fullstack program.
        </p>
      </div>
    </div>
  )
}

export default Introduction
