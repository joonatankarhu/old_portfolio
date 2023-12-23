const CardAboutMe = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-3 lg:justify-between lg:items-start lg:flex-row">
      <div className="lg:max-w-3xl">
      <p className='lg:max-w-3xl text-black/80'>Welcome to my portfolio! My name is Joonatan Karhu and I am a Software Developer.
<br/><br/>
At the moment, I am working at Riots Global as a Frontend/Mobile Developer.
<br/><br/>
While I have knowledge in full-stack development, I have a very strong passion for <b>Frontend Development</b> and <b>Web design</b>
<br/><br/>
My mother tongue is Swedish, and I speak fluent Finnish and English. I like meeting people from different places all over the world.
My favorite technology is <b>Vue.js</b>.
<br/><br/>
I started my programming journey in 2020 and web development became my passion very quickly. I have been doing self studies and building my own projects since then. I am interested in Web Design and UI/UX.</p>
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
            <p className="lg:hidden">Vue.js, React.js, CSS, Tailwind, TypeScript and JavaScript</p>
            <ul className="hidden lg:block list-disc pl-5 mt-1">
              <li>Vue.js</li>
              <li>React.js</li>
              <li>CSS</li>
              <li>TailwindCSS</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <p><strong>Backend</strong>:</p> 
            <p className="lg:hidden">Node.js, Express.js, TypeScript, PostGreSQL and some basic PHP</p>
            <ul className="hidden lg:block list-disc pl-5 mt-1">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>TypeScript</li>
              <li>PostGreSQL</li>
              <li>Basic PHP</li>
            </ul>
          </div>
          <div>
            <p><strong>Others</strong>:</p> 
            <p className="lg:hidden">Azure, CI/CD, Agile, Quasar.js, Scrum, Next.js</p>
            <ul className="hidden lg:block list-disc pl-5 mt-1">
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