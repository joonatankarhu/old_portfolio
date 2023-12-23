import Link from "next/link"

const AboutMeTxt = () => {
  return (
    <p className="hidden lg:block text-black/80 mt-6 lg:mt-0">
      My name is Joonatan Karhu, and I am a Fullstack Web Developer with two years of experience in self-studies and project development. 
      <br/>
      Recently I graduated from an amazing six-month Full-Stack program at <Link href="https://buuttiedu.com/front-page" target="_blank" className="font-semibold hover:underline">Buutti Education</Link>. 
      This comprehensive program encompasses various essential aspects, such as writing clean code, testing, collaborating in group projects, honing logical thinking and problem-solving abilities.
      
      <br/><br/>
      When building web applications, I like using modern JavaScript frameworks and libraries for example: <b>React.js</b>, <b>Next.js</b>, <b>Node.js</b>, <b>Express.js</b> and <b>TypeScript</b>. I enjoy working with CSS a lot, and <b>TailwindCSS</b> has become my favorite tool for that.
      <br/><br/>
      I speak Finnish and English at a professional level, and Swedish is my mother tongue. In my free time, I enjoy spending quality time with my friends and family, as well as going to the gym and playing computer games.
      </p>
  )
}

export default AboutMeTxt