const SectionWrapper = ({ id, children }) => {
  return (
    <div id={id} className="flex flex-col items-center justify-center w-full py-10 my-5 lg:my-0">
      {children}
    </div>
  )
}

export default SectionWrapper