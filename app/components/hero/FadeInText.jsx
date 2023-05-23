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
    <div className="relative flex flex-col justify-center items-center h-screen z-5">
      <div className="absolute top-10 extraSmall:top-8 lessSmall:top-14 mobile:top-18 mobileX:text-center almostIpad:top-20">
        <h1
          className={`text-2xl extraSmall:text-3xl smaller:text-4xl small:text-5xl lessSmall:text-6xl mobileX:text-7xl almostIpad:text-6xl md:text-7xl text-gray-800 ${
            isVisible ? 'animate-fadeLeftToMiddle' : 'opacity-0'
          }`}
        >
          Fullstack Developer
        </h1>
      </div>
      <div className="absolute w-full mobileX:text-center left-0 pb-10 extraSmall:pb-20 small:mt-10 lessSmall:mt-0 lessSmall:top-[210px] mobileX:top-[240px] almostIpad:top-[180px]">
        <h2
          className={`text-xl extraSmall:text-2xl small:text-3xl lessSmall:text-4xl mobileX:text-5xl md:text-5xl text-gray-800 ${
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
