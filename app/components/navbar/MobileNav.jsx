import Link from 'next/link'
import { useEffect, useState } from 'react'


const MobileNav = ({ isOpen, navHeight }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <div
    className={`lg:hidden bg-white z-50 fixed top-0 left-0 w-full font-medium shadow-md border-b-2 border-gray-700/20 px-1 text-lg transition-transform duration-500 transform ${
      isMounted && isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}
    style={{ paddingTop: `${navHeight}px` }}
    >
      <Link
        href="#work"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        My Work
      </Link>
      <Link
        href="#about"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        About
      </Link>
      <Link
        href="#contact"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        Contact
      </Link>
      <a
        href="/CV.pdf"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
        download="Joonatan_Karhu_CV"
      >
        Download CV
      </a>
    </div>
  )
}

export default MobileNav
