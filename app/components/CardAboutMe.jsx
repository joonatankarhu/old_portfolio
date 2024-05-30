const CardAboutMe = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-3 lg:justify-between lg:items-start lg:flex-row">
      <div className="lg:max-w-3xl">
        <p className='lg:max-w-3xl text-black/80'>
          My name is Joonatan Karhu and I am a Software Developer. I started my programming journey in 2020 and I work at Biila Solutions as a full-stack developer. I have a very strong passion for <b>Frontend Development</b> and <b>Web design</b>
          <br /><br />
          My mother tongue is Swedish, and I speak fluent Finnish and English as well. I like meeting people from different places all over the world. On my free time I enjoy going to the gym, movie theatre and spending time with family.
        </p>
      </div>
      <div className="lg:max-w-[30%] lg:mr-[8%]">
        <h4 className='text-2xl font-semibold w-full my-2 lg:mt-0 lg:font-semibold'>Skills</h4>
        <div className='lg:hidden'>
          <p className='text-black/80'>
            I enjoy developing applications with many different tools, and here is a list of the technologies I have gotten experience with so far.
          </p>
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          <div>
            <p><strong>Frontend</strong>:</p>
            <p className="lg:hidden">Vue, React, Angular, JavaScript, CSS and TailwindCSS</p>
            <ul className="hidden lg:block list-disc pl-5 mt-1">
              <li>Vue</li>
              <li>React</li>
              <li>Angular</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div>
            <p><strong>Backend</strong>:</p>
            <p className="lg:hidden">Laravel, PHP, Node.js, Express.js, PostGreSQL and MySQL</p>
            <ul className="hidden lg:block list-disc pl-5 mt-1">
              <li>Laravel</li>
              <li>PHP</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PostGreSQL</li>
              <li>Basic PHP</li>
            </ul>
          </div>
          <div>
            <p><strong>Others</strong>:</p>
            <p className="lg:hidden">TypeScript, Azure, CI/CD, Agile, Quasar.js, Scrum, Next.js</p>
            <ul className="hidden lg:block list-disc pl-5 mt-1">
              <li>TypeScript</li>
              <li>Azure</li>
              <li>CI/CD</li>
              <li>Agile</li>
              <li>Quasar.js</li>
              <li>Scrum</li>
              <li>Next.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardAboutMe