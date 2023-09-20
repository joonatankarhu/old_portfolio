import Link from "next/link"
import SmallTitle from "./SmallTitle"

const Education = () => {
  return (
    <div className="w-full flex flex-col mt-5 lg:mt-5">
      <div className='flex flex-col md:w-full md:flex-row md:justify-between gap-5'>
        <div>
          <h4 className="font-bold text-xl">
            Buutti Education
          </h4>
          <h5>Full-stack Developer student</h5>
        </div>
        <div className='md:mr-10'>
          <p className='md:text-xl'><strong>Oulu, Finland</strong></p>
          <p>May 2023 to August 2023</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
          <div className="mt-5">
          <p className="text-black/80">This is a full-time, intensive program that equipped me with comprehensive skills and knowledge about Fullstack Development with <b>React.js</b>, <b>Node.js</b> and <b>TypeScript</b>.</p>
          </div>
        <div>
          <h5 className="font-medium text-lg mb-2">Key Learnings:</h5>

          <ul className="flex flex-wrap gap-2 list-disc pl-5 text-black/80">
            <li>Developed familiarity with group coding, cloud services, CI/CD, agile methodology and
Scrum</li>
            <li>Got hands on experience with building RESTful API’s and unit testing</li>
            <li>Improved in JavaScript, React, Node and TypeScript</li>
            <li>Utilized Git version control and ESlint to write and maintain clean code</li>
          </ul>
        </div>
        <div>
          <p>More information:</p>
          <Link href="https://buuttiedu.com/front-page" target="_blank" className="text-blue-500 font-semibold hover:underline">
            https://buuttiedu.com/front-page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Education