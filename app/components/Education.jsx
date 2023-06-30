import Link from "next/link"
import SmallTitle from "./SmallTitle"

const Education = () => {
  return (
    <div className="w-full flex flex-col mt-5">
      <div className="text-xl font-semibold">
        <h4 className="text-2xl">
          Fullstack Developer
        </h4>
        <p className="text-lg font-normal">
          <Link href="https://buutticonsulting.com/en/home/" target="_blank" className="font-semibold hover:underline">
            <span className="text-blue-500 text-base">
              Buutti Oy
            </span>
          </Link>
          <span className="text-sm pl-2 text-gray-500">
            Oulu, Finland {`(hybrid)`}
          </span>
        </p>
        <p className="text-sm font-light py-1 pb-4 lg:text-base">
          28.04.2023 - 13.11.2023
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <SmallTitle title='Summary' />

          <p className="text-black/80">This is a full-time, intensive program that equipped me with comprehensive skills and knowledge about Fullstack Web Development with <b>React.js</b>, <b>Node.js</b> and <b>TypeScript</b>.</p>
        </div>
        <div>
          <SmallTitle title='Assignments' />

          <p className="text-black/80">
            Below you will find my comprehensive collection of assignments and code developed by me during the program.
            <br/>
            Link: {' '}
            <Link 
              href="https://gitlab.com/joonatankarhu/buutti-fullstack-assignments" target="_blank" 
              className="text-blue-500 font-semibold hover:underline"
            >
              Assignments
            </Link>
            <br/>
            This repository showcases my proficiency and expertise in programming, encompassing various projects and coding tasks. Feel free to explore and review the contents at your convenience. If you have any inquiries or need further information about specific assignments or code samples, please don't hesitate to reach out to me.
          </p>
          
        </div>
        <div>
          <SmallTitle title='Key Learnings:' />

          <ul className="flex flex-wrap gap-2 list-disc pl-5 text-black/80">
            <li>Proficient in building applications using React, Node, and TypeScript.</li>
            <li>Developed familiarity with Azure, CI/CD, Git, Scrum, ESLint, CRUD/Restful APIs and Testing.</li>
            <li>Improved communication skills and gained experience in collaborative coding with other developers.</li>
            <li>Acquired proficiency in using Scrum methodology and utilized Git version control, testing and ESlint for code quality.</li>
          </ul>
        </div>
        <div className="lg:pt-5">
          <p>For more information about the education:</p>
          <Link href="https://buuttiedu.com/front-page" target="_blank" className="text-blue-500 font-semibold hover:underline">
            https://buuttiedu.com/front-page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Education