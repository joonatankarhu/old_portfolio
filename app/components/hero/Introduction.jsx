import Image from 'next/image'

const Introduction = () => {
  return (
    <div className="lg:w-1/2 mt-10 md:mt-20 lg:mt-0 lg:flex lg:flex-col lg:items-center relative">
      <div className="hidden lg:block w-[30%] xlg:w-[30%]">
        <Image
          src="/profile_pic_blackwhite.png"
          width={250}
          height={250}
          alt="Picture of the author"
        />
      </div>

      <div class="hidden lg:block relative w-0 h-0 mt-6 z-1">
        <div class="absolute border-transparent border-solid border-8 transform rotate-45 -translate-x-2 -translate-y-2 bg-gray-400"></div>
      </div>
      <div className="lg:mx-12 lg:bg-white lg:rounded-xl lg:border-2 lg:border-gray-400 lg:p-4 lg:z-10">
        <p className="text-lg text-black/70">
          Hi, I am a self-taught Web Developer with a passion for continuous
          learning and problem-solving. Recently, I completed the development of
          an eCommerce store and I am currently enrolled full-time in Buutti's
          Fullstack program.
        </p>
      </div>
    </div>
  )
}

export default Introduction
