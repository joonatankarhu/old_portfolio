
const DeskNav = () => {
  return (
    <div
      className='hidden lg:flex bg-white absolute font-medium w-full shadow-lg z-20 text-lg'
    >
      <a
        href="#work"
        className="block px-5 py-4 text-gray-800 hover:bg-gray-200 hover:text-black transition-all duration-500"
      >
        My Work
      </a>
      <a
        href="#education"
        className="block px-5 py-4 text-gray-800 hover:bg-gray-200 hover:text-black transition-all duration-500"
      >
        Education
      </a>
      <a
        href="#about"
        className="block px-5 py-4 text-gray-800 hover:bg-gray-200 hover:text-black transition-all duration-500"
      >
        About
      </a>
      <a
        href="#contact"
        className="block px-5 py-4 text-gray-800 hover:bg-gray-200 hover:text-black transition-all duration-500"
      >
        Contact
      </a>
      <a
        href="/CV.pdf"
        className="block px-5 py-4 text-gray-800 hover:bg-gray-200 hover:text-black transition-all duration-500"
        download="Joonatan_Karhu_CV"
      >
        Download CV
      </a>
    </div>
  )
}

export default DeskNav
