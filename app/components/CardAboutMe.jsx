import Link from "next/link"
import AboutMeSubTitle from './AboutMeSubTitle'

const CardAboutMe = () => {
  return (
    <div className="lg:border-2 lg:rounded-md lg:p-5 w-full flex flex-wrap items-center justify-center mt-3">
        <div className="text-black">
          <AboutMeSubTitle 
            subTitle="Introduction" 
          />
          <p>My name is Joonatan Karhu. I am a Full-stack Developer and my background includes self-studies, project development, design and a six month Fullstack Development program. At the moment I am working as a Frontend Developer intern at <strong>Riots Global</strong>.</p>
        <br/>
        <AboutMeSubTitle 
          subTitle="Fullstack Program" 
        />
        <p>This is a six month fullstack development program at <Link href="https://buuttiedu.com/front-page" target="_blank" className="font-semibold hover:underline">Buutti Education</Link>. 
        <br/>
        The studies includes many essential aspects and skills that are needed as a Fullstack developer<br/></p>
        <strong className='block mt-2 mb-1 lg:mb-2 lg:mt-4'>
          Subjects:
        </strong> 
        <ul className='list-disc relative left-5'>
          <li>Writing clean and readable code</li>
          <li>Collaborating with others and in group projects</li>
          <li>Logical thinking and problem-solving abilities</li>
          <li>Fundamentals in many modern technologies</li>
          <li>Work experience {`(Internship)`}</li>
        </ul>
        <br/>
        <AboutMeSubTitle 
          subTitle="Internship" />
        <p>My internship is to work as a Frontend Developer for three months at <strong>Riots Global</strong>.
        <strong className='block mt-2 lg:mt-4'>Main tasks:</strong></p>
        <ul className='list-disc relative left-5'>
          <li>Improve their software UI and UX.</li>
          <li>Plan, design and implement new features</li>
          <li>Build reuseable components</li>
        </ul>
        <br/>
        <AboutMeSubTitle 
          subTitle="Technologies" />
        <p>I enjoy developing applications with modern JavaScript and CSS frameworks. But I am also very familiar with vanilla HTML, CSS and JavaScript.</p>
        <div className='flex flex-col gap-3 mt-3'>
          <div>
            <p><strong>Frontend</strong>:</p> 
            <p>React.js, Vue.js, TailWind and Quasar.js</p>
          </div>
          <div>
            <p><strong>Backend</strong>:</p> 
            <p>Node.js, Express.js.</p>
          </div>
          <div>
            <p><strong>Others</strong>:</p> 
            <p>TypeScript, Next.js, Docker, Cloud Services, CI/CD, Git, SQL, Figma</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default CardAboutMe