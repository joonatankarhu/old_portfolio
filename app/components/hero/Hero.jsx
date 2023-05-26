'use client'
import FadeInText from './FadeInText'
import Introduction from './Introduction'

const Hero = () => {
  return (
    <div className="w-full h-full lg:h-screen relative lg:flex lg:justify-center lg:items-center">
      <FadeInText/>
      <Introduction/>
    </div>
  )
}

export default Hero
