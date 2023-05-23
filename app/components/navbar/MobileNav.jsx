import Link from 'next/link'

const MobileNav = ({ navHeight }) => {
  return (
    <div
      className={`lg:hidden bg-white z-[50] absolute top-[${navHeight}px] font-medium w-full shadow-lg z-20 px-1 text-lg lg:flex`}
    >
      <Link
        href="#work"
        scroll={false}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        My Work
      </Link>
      <Link
        href="/"
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
