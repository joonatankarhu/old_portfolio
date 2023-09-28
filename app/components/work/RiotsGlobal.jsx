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
    <div className='w-full flex flex-col lg:flex-row md:justify-between py-5 gap-5'>
      <div>
        <h4 className="font-bold text-xl">
          Riots Global
        </h4>
        <h5>Frontend Developer Intern</h5>
        <div className='mt-3 md:mt-7 text-black/80'>
          <ul className='list-disc pl-5 md:pl-10'>
            <li>Responsible for designing and developing the frontend of their software</li>
            <li>Implementing new design ideas and improving UI/UX
            </li>
            <li>Debugging and testing</li>
            <li>Building reuseable components with Vue.js</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col lg:max-w-[20%]'>
        <p className='md:text-xl'><strong>Kempele, Finland</strong></p>
        <p>August 2023 to present</p>
        <div className="lg:flex lg:flex-wrap mt-5">
          <div className="flex flex-row flex-nowrap md:flex-wrap content-start lg:justify-center justify-start items-center gap-4 smaller:gap-5 lg:gap-4 text-base font-semibold w-full mt-3 lg:mt-5">
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

export default RiotsGlobal
