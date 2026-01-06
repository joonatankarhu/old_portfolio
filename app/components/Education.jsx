const Education = () => {
  const skills = [
    {
      name: 'React.js',
      imageSrc: 'https://img.icons8.com/color/48/000000/react-native.png',
    },
    {
      name: 'TypeScript',
      imageSrc: 'https://img.icons8.com/color/48/typescript.png',
    },
    {
      name: 'Node.js',
      imageSrc: 'https://img.icons8.com/fluency/100/null/node-js.png',
    },
    {
      name: 'Express.js',
      imageSrc: 'https://img.icons8.com/fluency/48/null/express-js.png',
    },
    {
      name: 'Azure',
      imageSrc: 'https://img.icons8.com/fluency/48/azure-1.png',
    },
    {
      name: 'PostgreSQL.js',
      imageSrc: 'https://img.icons8.com/color/48/postgreesql.png',
    },
    
  ]
  return (
    <div className='w-full flex flex-col mt-5 lg:mt-5 md:w-full md:flex-row md:justify-between gap-5'>
      <div>
        <div>
            <h4 className="font-bold text-xl">
              Buutti Oy
            </h4>
            <h5>Full-Stack Developer</h5>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6 lg:mb-5">
          <div className="mt-5 lg:max-w-3xl">
            <p className="text-black/80">This is a full-time, fast phased program that equipped me with comprehensive skills and knowledge about Full-stack Web Development. We built multiple Full-Stack applications with <b>React.js</b>, <b>Node.js</b>, <b>TypeScript</b> and we hosted them on Azure with CI/CD pipelines and connected them to PostgreSQL databases.</p>
          </div>
          <div className="lg:max-w-3xl">

            <ul className="flex flex-wrap gap-2 list-disc pl-5 text-black/80">
              <li>Developed familiarity with Azure, CI/CD, Scrum, collaborating with other developers and writing clean code.</li>
              <li>We got a lot of experience designing and building RESTful API’s with Node.js.</li>
              <li>We had many vanilla JavaScript, React and TypeScript challenges to practice with and solve.</li>
              <li>In each project, we utilized Git version control, GitLab and ESlint to write clean and maintainable code.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[20%]">
        <div>
          <p className='md:text-xl'><strong>Oulu, Finland</strong></p>
          <p>May 2023 to August 2023</p>
        </div>
        <div className="flex mt-5 flex-row flex-wrap md:flex-wrap content-start lg:justify-center justify-start items-center gap-4 smaller:gap-5 lg:gap-4 text-base font-semibold w-full lg:mt-5">
        {skills &&
              skills.map((skill) => (
                <div className="w-full smaller:w-[45%] small:w-[45%] lg:w-[100%] flex justify-start content-start items-center gap-[6px] smaller:gap-2 lg:gap-3">
                  <div className="w-[14%] smaller:w-[20%] lg:w-[10%] min-w-[35px] lg:min-w-[2.4em] small:min-w-[40px]">
                    <img src={skill.imageSrc} />
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Education