import WorkItem from './WorkItem'

const Work = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full mt-10">
      <h3 className="text-4xl smaller:text-5xl almostIpad:text-5xl lg:text-7xl font-semibold w-full mb-2 text-black/90 lg:text-center">
        Work
      </h3>
      <WorkItem />
    </div>
  )
}

export default Work
