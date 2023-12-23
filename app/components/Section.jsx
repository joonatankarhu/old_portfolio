const Section = ({ id, children }) => {
  return (
    <div id={id} className="flex flex-col items-center justify-center lg:justify-start lg:items-start w-full pt-8 lg:py-5 lg:my-0 max-w-5xl">
      {children}
    </div>
  )
}

export default Section