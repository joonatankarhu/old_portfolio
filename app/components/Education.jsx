import Link from "next/link"

const Education = () => {
  return (
    <div id="education" className="flex w-full flex-wrap pt-12 lg:mt-5">
      <h3 className="text-2xl smaller:text-3xl lessSmall:text-4xl almostIpad:text-5xl lg:text-6xl font-semibold w-full mb-2 text-black py-5 lg:pb-10">
        Education
      </h3>
      <div className="w-full flex flex-col">
        <div className="text-xl font-semibold">
          <h4>Fullstack Developer</h4>
          <p className="text-lg font-normal">
            <Link href="https://buutticonsulting.com/en/home/" target="_blank" className="font-semibold hover:underline">
              Buutti Oy
            </Link>
            <span className="text-sm pl-2 text-black/70">
              Oulu, Finland {`(hybrid)`}
            </span>
          </p>
          <p className="text-sm font-light py-1 pb-4">28.04.2023 - ongoing</p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h5 className="font-bold text-lg">
              Program Description:
            </h5>
            <p>This is a full-time, intensive program that equipped me with comprehensive skills and knowledge about Fullstack Web Development with <b>React.js</b>, <b>Node.js</b> and <b>TypeScript</b>.</p>
          </div>
          <div>
            <h5 className="font-bold pb-2">Key Learnings:</h5>
            <ul className="flex flex-wrap gap-3 list-disc pl-5">
              <li>Proficient in building applications using React, Node, and TypeScript.</li>
              <li>Developed familiarity with Azure, CI/CD, Git, Scrum, ESLint, CRUD/Restful APIs and Testing.</li>
              <li>Improved communication skills and gained experience in collaborative coding with other developers.</li>
              <li>Acquired proficiency in using Scrum methodology and utilized Git version control, testing and ESlint for code quality.</li>
            </ul>
          </div>
          <div className="lg:pt-5">
            <p>For more information:</p>
            <Link href="https://buuttiedu.com/front-page" target="_blank" className="font-semibold hover:underline">
              https://buuttiedu.com/front-page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education