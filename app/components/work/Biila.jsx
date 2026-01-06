"use client"

import ImageSlider from './ImageSlider'
import Link from 'next/link'

const Biila = () => {
  const skills = [
    {
      name: 'Angular',
      imageSrc:
        'https://img.icons8.com/color/48/vue-js.png',
    },
    {
      name: 'Laravel',
      imageSrc: '/quasar.png',
    }
  ]
  return (
    <div className='w-full flex flex-col pt-10 md:max-w-5xl'>
      <div className="md:w-full md:flex md:justify-between mb-3 md:mb-0">
        <h4 className="font-bold text-xl md:text-2xl">Flovi</h4>
        <p className='md:hidden text-gray-500 '>Helsinki, Finland</p>
        <p className="md:hidden text-gray-500">January 2024 - January 2026</p>
        <div className="hidden md:block ">
          <p className=' text-xl font-semibold text-center'>Helsinki, Finland</p>
          <p className="text-lg">January 2024 - January 2026</p>
        </div>

      </div>

      <div className="md:hidden w-full mb-6">
        <ImageSlider images={["/landing_page_1.png","/landing_page_with_drawer.png","/new_reservation.png","/profile_page.png","/team_members_page.png"]} />
      </div>

      <div className="md:w-full flex flex-col items-start gap-6">
        {/* Huge, centered slider first on desktop */}
        <div className="hidden md:flex w-full justify-center mt-8">
          <ImageSlider 
            images={["/landing_page_1.png","/landing_page_with_drawer.png","/new_reservation.png","/profile_page.png","/team_members_page.png"]}
            className="w-full max-w-5xl md:h-[520px] lg:h-[640px] xl:h-[720px] 2xl:h-[800px] shadow-xl rounded-xl"
          />
        </div>
        {/* Description below image on desktop */}
        <div className="flex flex-row gap-4 w-full mt-4">
          <div className='text-black/80'>
            <h5 className="font-semibold">Full-Stack Developer</h5>
            <div className="text-gray-600 mt-3">
              <p>
                I was part of the customer focused team at Flovi, where we rebuilt multiple legacy apps into a single, new, more scalable and user-friendly product using <b>Nuxt/Vue.js</b>, <b>TypeScript</b>, <b>TailwindCSS</b> and <b>Laravel</b>. My work also included refactoring old Angular code into improved and scalable solutions. I Designed and implemented RESTful APIs and backend features in Laravel, supporting collaborative projects with smooth integration. I collaborated closely with cross functional teams: logistics, designers, product managers, and other developer teams to deliver a better experience for users.
              </p>
              <p className="mt-3">To read more about the project and see detailed views, click 
                <Link
                 href="/flovi"
                 className="block text-white w-full text-center font-bold bg-black hover:bg-blue-600 transition-all duration-300 py-2 rounded-md mt-1 smaller:py-2 smaller:text-base lessSmall:mt-3 lessSmall:mb-4 my-3 mobileX:py-3 almostIpad:max-w-[400px] lg:max-w-[200px] lg:mt-8"
                >
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Biila
