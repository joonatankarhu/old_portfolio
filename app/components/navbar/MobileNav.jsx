"use client";

const MobileNav = ({ isOpen, setIsOpen, navHeight }) => {
  const closeNav = () => setIsOpen(false);

  return (
    <div
      style={{ top: navHeight }}
      className={`
        lg:hidden fixed left-0 w-full
        z-40 bg-white shadow-md border-b border-gray-700/20
        text-lg font-medium
        transition-all duration-500 ease-in-out
        ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }
      `}
    >
      <a
        href="#work"
        onClick={closeNav}
        className="block px-8 py-2 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:pl-10"
      >
        Work Experience
      </a>

      <a
        href="#education"
        onClick={closeNav}
        className="block px-8 py-2 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:pl-10"
      >
        Education
      </a>

      <a
        href="#about"
        onClick={closeNav}
        className="block px-8 py-2 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:pl-10"
      >
        About
      </a>

      <a
        href="#contact"
        onClick={closeNav}
        className="block px-8 py-2 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:pl-10"
      >
        Contact
      </a>

      <a
        href="/CV.pdf"
        onClick={closeNav}
        download
        className="block px-8 py-2 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:pl-10"
      >
        Download CV
      </a>
    </div>
  );
};

export default MobileNav;
