import SectionTitle from './SectionTitle.jsx'

const CardAboutMe = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center mt-3">
      <div className="lg:max-w-3xl">
        <p className='lg:max-w-3xl text-black/80'>
          I am a Full-Stack Web Developer born in Finland and raised in Sweden. Currently I'm based in Helsinki, Finland. I enjoy problem solving, learning and building new things, so programming became a natural fit for me. I began programming as a hobby first in 2020, but soon realized that I wanted to turn it into a career. Now I have been working as a professional developer since 2023.
          <br/><br/>
         When I'm not coding, I enjoy spending time with friends and family, playing video games, and staying active at the gym. I'm always eager to learn new skills and embrace challenges, both in my personal life and in my career.
        </p>
      </div>

      <div id="technologies" className="mt-10 flex flex-col gap-3 items-start">
       <div className="pl-5 md:pl-0">
         <SectionTitle title={'Technologies'} />
       </div>
      
        <p className="text-black/80">Here are technologies I have experience with so far. I am always happy to learn new ones!</p>
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-5">
        <div className='flex flex-col lg:flex-row gap-8 mt-3'>
          
          <div className="py-5 px-10 shadow-lg border rounded-lg bg-white">
            <p className="text-center"><strong>Frontend</strong></p>

            <ul className="max-w-md flex flex-wrap items-center justify-center gap-2 mt-2 text-sm text-black/90 py-2">
              <li>Vue.js</li>
              <li>React.js</li>
              <li>Angular</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>TailwindCSS</li>
              <li>Material UI</li>
              <li>PrimeVue</li>
              <li>Quasar.js</li>
              <li>Chart.js</li>
              <li>Next.js</li>
              <li>Nuxt.js</li>
            </ul>
          </div>

          <div className="py-5 px-10 shadow-lg border rounded-lg bg-white">
            <p className="text-center"><strong>Backend</strong></p>

            <ul className="max-w-md flex flex-wrap items-center justify-center gap-2 mt-2 text-sm text-black/90 py-2">
              <li>Laravel</li>
                <li>PHP</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostGreSQL</li>
                <li>MySQL</li>
                <li>REST APIs</li>
            </ul>
          </div>

          <div className="py-5 px-10 shadow-lg border rounded-lg bg-white">
            <p className='text-center'><strong>Others</strong></p>

            <ul className="max-w-md flex flex-wrap items-center justify-center gap-2 mt-2 text-sm text-black/90 py-2">
              <li>TypeScript</li>
              <li>Unit Testing</li>
              <li>Git/GitHub</li>
              <li>Docker</li>
              <li>CI/CD pipelines</li>
              <li>Agile</li>
              <li>Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardAboutMe