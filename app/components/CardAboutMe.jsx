const CardAboutMe = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-3 lg:justify-between lg:items-start lg:flex-row">
      <div className="lg:max-w-3xl">
      <p className='lg:max-w-3xl text-black/80'>Hello! My name is Joonatan Karhu and I am a Web Developer.
If you are in need of a website, don't hesitate to reach out to me and we can discuss more about it!
<br/><br/>
At the moment, I am working as a Frontend Developer intern at Riots Global.
<br/><br/>
While I am a Full-stack developer, I have a very strong passion for Frontend Development and Web design. My long term goal at the moment is to become a UI Developer or a Lead Architect.
<br/><br/>
Background about me: 
My mother tongue is Swedish, and I speak fluent Finnish and English as well. I enjoy problem solving and I love meeting people from different places all over the world.
My favorite technologies so far are React, TypeScript, JavaScript, Node and of course CSS! I recently learned to build UIs with Vue.js and It's becoming a favorite too.
<br/><br/>
I started learning programming and web development in 2020 by doing self-studies and building my own projects. And quickly I became interested in Web Design and UI/UX. I am currently enrolled in a six month Full-stack education at Buutti Education, where I get to improve my knowledge and skills.</p>
      </div>
      <div className="lg:max-w-[30%] lg:mr-[8%]">
        <h4 className='text-2xl font-semibold w-full my-2 lg:mt-0 lg:font-semibold'>My Skills</h4>        
        <div className='lg:hidden'>
          <p className='text-black/80'>
            I enjoy developing applications with many different tools, here is a list of technologies I have experience with.
          </p>
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          <div>
            <p><strong>Frontend</strong>:</p> 
            <p className="lg:hidden">React.js, Vue.js, Quasar.js, CSS, TailwindCSS, Bootstrap, TypeScript and JavaScript</p>
            <ul className="hidden lg:block list-disc pl-5 mt-1">
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Quasar.js</li>
              <li>CSS</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
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
            <p className="lg:hidden">Azure, CI/CD, Agile, Scrum, Next.js</p>
            <ul className="hidden lg:block list-disc pl-5 mt-1">
              <li>Azure</li>
              <li>CI/CD</li>
              <li>Agile</li>
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