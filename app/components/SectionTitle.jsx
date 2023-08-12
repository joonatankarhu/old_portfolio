const SectionTitle = ({ title }) => {
  return (
    <h3 className="text-3xl extraSmall:text-4xl smaller:text-4xl lg:text-6xl font-bold w-[90%] lg:w-[100%] lg:pb-3 text-black lg:border-b-4 pb-2 lg:mx-0  lg:text-left my- py-5 border-b-2 border-gray-700 relative right-5 lg:right-0">
      { title }
    </h3>
  )
}

export default SectionTitle