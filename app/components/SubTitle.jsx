const SubTitle = ({ title }) => {
  return (
    <h3 className="text-3xl extraSmall:text-4xl smaller:text-5xl lg:text-6xl font-semibold w-[90%] lg:w-[100%] lg:pb-3 text-gray-700 border-b-4 pb-2 lg:mx-0 text-center lg:text-left my-5 py-5 italic border-gray-700">
        {title}
    </h3>
  )
}

export default SubTitle