const MobileNav = ({ navHeight }) => {
  return (
    <div
      className={`bg-white z-[50] absolute top-[${navHeight}px] font-medium w-full shadow-lg z-20 px-1 text-lg`}
    >
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500">
        My Work
      </a>
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500">
        About
      </a>
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500">
        Contact
      </a>
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500">
        Download CV
      </a>
    </div>
  )
}

export default MobileNav
