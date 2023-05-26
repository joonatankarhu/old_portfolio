import WorkItem from './WorkItem'

const Work = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full mt-10 lg:px-5 lg:py-10">
      <h3 className="text-2xl smaller:text-3xl  lessSmall:text-4xl almostIpad:text-5xl lg:text-7xl font-semibold w-full mb-2 text-black lg:text-center">
        Experience
      </h3>
      <WorkItem />
    </div>
  )
}

export default Work
