'use client'

const RiotsGlobal = () => {
  const skills = [
    {
      name: 'Vue.js',
      imageSrc:
        'https://img.icons8.com/color/48/vue-js.png',
    },
    {
      name: 'Quasar.js',
      imageSrc: '/quasar.png',
    }
  ]
  return (
    <div className='w-full flex flex-col py-5 md:max-w-4xl'>
      <div className="md:w-full md:flex md:justify-between mb-3 md:mb-0">
        <h4 className="font-bold text-xl md:text-2xl">
          Riots Global Oy
        </h4>
        <p className='md:hidden text-gray-500'>Oulu, Finland</p>
        <p className="md:hidden text-gray-500">August 2023 - ongoing</p>
        <div className="hidden md:block">
          <p className=' text-2xl font-semibold'>Oulu, Finland</p>
          <p className="text-lg">August 2023 - ongoing</p>
        </div>

      </div>

      <div className="md:w-full md:flex md:justify-between md:items-start">
          
        <div className="flex flex-col gap-4 md:max-w-xl">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-center pt-[2px]">
              <div className="dot bg-blue-700"></div>
              <div className="px-[1px]  bg-gray-300 h-5/6 mt-2"></div>
            </div>
            <div className='text-black/80'>
              
              <h5 className="font-semibold">Frontend Developer</h5>

              <p>I build their mobile application and display data into more user friendly interfaces. I build lots of reuseable vue components.</p>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-center pt-[4px]">
                <div className="small-dot bg-gray-400"></div>
                <div className="px-[1px]  bg-gray-300 h-5/6 mt-2"></div>
              </div>
            <div className='text-black/80'>
              <h5 className="font-semibold">Frontend Developer Internship</h5>
              <p>During my internship I worked on the frontend of their Software Application, by creating new designs, reuseable components and new features.</p>
            </div>
          </div>

        </div>
        <div className='flex flex-col mt-5 md:mt-0 lg:max-w-[20%]'>
          <div className="lg:flex lg:flex-wrap">
            <div className="flex flex-row flex-nowrap md:flex-wrap content-start lg:justify-center justify-start items-center gap-4 smaller:gap-5 lg:gap-4 text-base font-semibold w-full md:mt-4">
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
    </div>
  )
}

export default RiotsGlobal
