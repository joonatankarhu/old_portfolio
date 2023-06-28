import Link from "next/link"

const Education = () => {
  return (
    <div id="education" className="flex w-full flex-wrap mt-10 lg:mt-5">
      <h3 className="text-2xl smaller:text-3xl  lessSmall:text-4xl almostIpad:text-5xl lg:text-7xl font-semibold w-full mb-2 text-black lg:text-center py-5">
        Education
      </h3>
      <div className="w-full flex flex-col">
        <div className="text-xl font-semibold">
          <h4>Fullstack Developer</h4>
          <p className="text-lg font-normal">
            Buutti Oy
            <span className="text-sm pl-2">
              - Oulu, Finland {`(hybrid)`}
            </span>
          </p>
          <p className="text-sm font-light py-1 pb-4">28.04.2023 - ongoing</p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h5 className="font-bold">Program Description:</h5>
            <p>This is a full-time, intensive Full-stack Web Development program that equipped me with comprehensive skills and knowledge about Fullstack development with React, Node, TypeScript. I became better at communicating by collaborating in group projects and I am now more familiar with CI/CD in Azure and GitLab.</p>
          </div>
          <div>
            <h5 className="font-bold pb-2">Key Learnings:</h5>
            <ul className="flex flex-wrap gap-3 list-disc pl-5">
              <li>Proficient in building applications using React, Node, and TypeScript.</li>
              <li>Developed familiarity with Azure, CI/CD, Unit Testing, and building CRUD apps and Restful APIs.</li>
              <li>Improved communication skills and gained experience in collaborative coding with other developers.</li>
              <li>Acquired proficiency in Scrum methodology and utilized Git version control and ESlint for code quality.</li>
            </ul>
          </div>
          <div>
            <p>More info:</p>
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