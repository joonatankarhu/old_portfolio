import Image from 'next/image'
import './Fade.css'
import { useEffect, useState } from 'react'
import './FadeRightToLeft.css'

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDeskVisible, setIsDeskVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 1000)
  }, [])

  useEffect(() => {
    setIsDeskVisible(true)
  }, [])
  return (
    <div className="lg:w-1/2 lg:top-[-40px] mt-10 md:mt-20 lg:mt-0 lg:flex lg:flex-col lg:items-center relative ">
      <div
        className={`${isVisible ? 'animate-fade' : 'opacity-0'
          }  flex flex-col-reverse  relative items-center justify-center lg:hidden`}
      >
        <div className='w-full  mt-2 mobileX:mt-5'>
          <p className="lg:hidden text-lg mobileX:text-xl text-gray-900/80 almostIpad:max-w-[600px] almostIpad:tracking-normal"> Hello, I'm a developer with strong passion for programming and continuous learning. I work at  <b><a href="https://biila.io/" target="_blank">
            Biila Solutions
          </a></b> as a Full Stack Developer
          </p>
        </div>
      </div>

      <div
        className={`${isDeskVisible ? 'animate-fadeRightToLeft' : 'opacity-0'
          } hidden  lg:flex lg:flex-col lg:items-center`}
      >
        <div className="hidden lg:block w-[30%] xlg:w-[30%]">
          <Image
            src="/aboutImageMobile_blach_white-modified.png"
            // src="/profile_picture.png"
            width={250}
            height={250}
            alt="Picture of the author"
          />
        </div>
        <div className="hidden lg:block relative w-0 h-0 mt-6 z-1">
          <div className="absolute border-transparent border-solid border-8 transform rotate-45 -translate-x-2 -translate-y-2 bg-gray-900/70"></div>
        </div>
        <div
          className={`hidden lg:block lg:mx-12 lg:bg-white lg:rounded-xl lg:border-2 lg:border-gray-900/70 lg:p-4 lg:z-10`}
        >
          <p className="text-lg text-gray-900/70">
            Hello, I'm a developer with strong passion for programming and continuous learning. I work at <b><a href="https://biila.io/" target="_blank">
              Biila Solutions
            </a></b> as a Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
