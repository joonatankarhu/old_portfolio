import Link from 'next/link'

const DeskNav = () => {
  return (
    <div
      className='hidden lg:flex bg-white absolute font-medium w-full shadow-lg z-20 text-lg'
    >
      <Link
        href="#work"
        className="block px-5 py-4 text-gray-800 hover:bg-gray-100 hover:text-black transition-all duration-500"
      >
        My Work
      </Link>
      <Link
        href="/"
        className="block px-5 py-4 text-gray-800 hover:bg-gray-100 hover:text-black transition-all duration-500"
      >
        About
      </Link>
      <Link
        href="#contact"
        className="block px-5 py-4 text-gray-800 hover:bg-gray-100 hover:text-black transition-all duration-500"
      >
        Contact
      </Link>
      <a
        href="/CV.pdf"
        className="block px-5 py-4 text-gray-800 hover:bg-gray-100 hover:text-black transition-all duration-500"
        download="Joonatan_Karhu_CV"
      >
        Download CV
      </a>
    </div>
  )
}

export default DeskNav
