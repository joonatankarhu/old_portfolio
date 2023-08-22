import React from 'react';

const MobileNav = ({ isOpen, setIsOpen, navHeight }) => {
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`lg:hidden z-50 fixed w-full font-medium shadow-md border-b-[1px] bg-white border-gray-700/20 text-lg transition-transform duration-500 transform mt-[${navHeight}px] ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <a
        href="#work"
        onClick={closeNav}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-black hover:pl-6 transition-all duration-500"
      >
        Work Experience
      </a>
      <a
        href="#education"
        onClick={closeNav}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        Education
      </a>
      <a
        href="#about"
        onClick={closeNav}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        About
      </a>
      <a
        href="#contact"
        onClick={closeNav}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
      >
        Contact
      </a>
      <a
        href="/CV.pdf"
        onClick={closeNav}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black hover:pl-6 transition-all duration-500"
        download="Joonatan_Karhu_CV"
      >
        Download CV
      </a>
    </div>
  );
};

export default MobileNav;
