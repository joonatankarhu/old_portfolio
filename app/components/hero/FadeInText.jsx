import './FadeInText.css'

import React, { useState, useEffect } from 'react'

const FadeInText = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [secondVisible, setSecondVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setSecondVisible(true)
    }, 1000)
  }, [isVisible])

  return (
    <div className="lg:w-1/2 relative flex flex-col justify-center items-center">
      <div className="w-full relative mt-10 almostIpad:mt-14 md:mt-20 lg:mt-0">
        <h1
          className={`font-semibold text-4xl smaller:text-5xl small:text-6xl mobileX:text-7xl
          closeIpad:text-8xl 
          md:text-8xl
          
           text-gray-800 ${
            isVisible ? 'animate-fadeLeftToMiddle' : 'opacity-0'
          }`}
        >
          Fullstack Developer
        </h1>
      </div>
      <div className="relative mt-3 smaller:mt-5 w-full small:mt-6 almostIpad:mt-8 md:mt-8 med:mt-12 lg:mt-8">
        <h2
          className={`font-medium md:font-semibold text-2xl extraSmall:text-2xl smaller:text-3xl small:text-4xl almostIpad:text-5xl
          md:text-5xl med:text-6xl lg:text-5xl 
           first-letter:
            text-gray-800 ${
            secondVisible ? 'animate-fadeLeftToMiddle' : 'opacity-0'
          }`}
        >
          Joonatan Karhu
        </h2>
      </div>
    </div>
  )
}

export default FadeInText
