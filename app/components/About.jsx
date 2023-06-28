import Link from "next/link"
import Image from 'next/image'


const About = () => {
  return (
    <div id="about" className="flex w-full my-5 flex-col mt-0 pt-20">
      <div className="lg:hidden w-full flex items-center justify-center">
        <div className="w-[50%] extraSmall:max-w-[100px] mb-4 small:max-w-[150px]">
          <Image
            src="/joonatan_karhu.jpg"
            width={250}
            height={250}
            className='rounded-full'
            alt="Picture of the author"
          />
        </div>
      </div>
      <h4 className="text-2xl smaller:text-3xl lessSmall:text-4xl almostIpad:text-5xl  md:text-4xl lg:text-5xl font-semibold text-black">
        About
      </h4>
      <p className="mt-3 text-black/80 text-base">
      Hi there! My name is Joonatan Karhu, and I am a skilled Fullstack Web Developer with two years of experience in self-studies and project development. 
      <br/>

      Currently, I am enrolled in an exceptional six-month intensive Full Stack program at <Link href="https://buuttiedu.com/front-page" target="_blank" className="font-semibold hover:underline">Buutti Education</Link>. 
      This comprehensive program encompasses various essential aspects, such as writing clean code, collaborating in group projects, honing logical thinking and problem-solving abilities. Additionally, it provides extensive exposure to a multitude of technologies, including TypeScript, React, JavaScript, Node, Express, CI/CD, Git, Azure and numerous other valuable skills.
      
      <br/><br/>
      When building web applications, I like using modern JavaScript frameworks and libraries e.g <b>React.js</b>/<b>Next.js</b>, <b>Node.js</b>/<b>Express.js</b> and <b>TypeScript</b>. I also enjoy working with CSS a lot, and <b>TailwindCSS</b> has become my favorite tool for that.
      <br/><br/>
      I speak Finnish and English at a professional level, and Swedish is my mother tongue. In my free time, I enjoy spending quality time with my friends and family, as well as going to the gym and playing computer games.
      </p>
    </div>
  )
}

export default About
