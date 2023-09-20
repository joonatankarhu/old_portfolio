import AboutMeSubTitle from './AboutMeSubTitle'

const CardAboutMe = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center mt-3">
        <div className="text-black">
          <AboutMeSubTitle 
            subTitle="Introduction" 
          />
          <p>Hello! I am a Full-stack developer, with a strong passion for Frontend Development and Web design. I speak fluently English, Finnish and Swedish. 
I like using the following technologies: React, Vue, JavaScript, TypeScript, Node, CSS and Tailwind. At the moment, I'm working as a Frontend Developer intern at Riots Global.</p>
        <br/>
        
        <AboutMeSubTitle 
          subTitle="Technology Preferences" />
        <p>I enjoy developing applications with modern JavaScript and CSS frameworks. But I am also very familiar with vanilla HTML, CSS and JavaScript. I like exploring and learning new tools and languages.</p>
        <div className='flex flex-col gap-3 mt-3'>
          <div>
            <p><strong>Frontend</strong>:</p> 
            <p>React.js, Vue.js, Tailwind, CSS, JavaScript and Quasar.js</p>
          </div>
          <div>
            <p><strong>Backend</strong>:</p> 
            <p>Node.js, Express.js.</p>
          </div>
          <div>
            <p><strong>Others</strong>:</p> 
            <p>TypeScript, Next.js</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default CardAboutMe