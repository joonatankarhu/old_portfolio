const Section = ({ id, children }) => {
  return (
    <div id={id} className="flex flex-col items-center justify-center w-full pt-8 lg:py-5 lg:my-0">
      {children}
    </div>
  )
}

export default Section