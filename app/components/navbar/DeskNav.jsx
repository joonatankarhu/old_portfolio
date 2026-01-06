
const DeskNav = () => {
  return (
    <div
      className='hidden lg:flex bg-white absolute w-full shadow-md z-20 text-lg'
    >
      <a
        href="#work"
        className="block ml-8 px-3 py-4 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-all duration-400"
      >
        Work Experience
      </a>
      <a
        href="#education"
        className="block px-3 py-4 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-all duration-400"
      >
        Education
      </a>
      <a
        href="#about"
        className="block px-3 py-4 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-all duration-400"
      >
        About
      </a>
       <a
        href="#technologies"
        className="block px-3 py-4 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-all duration-400"
      >
        Technologies
      </a>
      <a
        href="#contact"
        className="block px-3 py-4 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-all duration-400"
      >
        Contact
      </a>
      <a
        href="/CV.pdf"
        className="block px-3 py-4 text-gray-800 hover:bg-blue-100 hover:text-blue-700 transition-all duration-400"
        download="Joonatan_Karhu_CV"
      >
        Download CV
      </a>
    </div>
  )
}

export default DeskNav
