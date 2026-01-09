const DeskNav = () => {
  return (
    <div className="hidden lg:flex bg-white absolute w-full shadow-md z-20 text-lg">
      <a
        href="#work"
        className="block ml-8 px-3 py-4 text-gray-900 hover:bg-blue-600 hover:text-white hover:transition-all duration-400"
      >
        Work Experience
      </a>
      <a
        href="#education"
        className="block px-3 py-4 text-gray-900 hover:bg-blue-600 hover:text-white hover:transition-all duration-400"
      >
        Education
      </a>
      <a
        href="#about"
        className="block px-3 py-4 text-gray-900 hover:bg-blue-600 hover:text-white hover:transition-all duration-400"
      >
        About
      </a>
      <a
        href="#technologies"
        className="block px-3 py-4 text-gray-900 hover:bg-blue-600 hover:text-white hover:transition-all duration-400"
      >
        Technologies
      </a>
      <a
        href="#contact"
        className="block px-3 py-4 text-gray-900 hover:bg-blue-600 hover:text-white hover:transition-all duration-400"
      >
        Contact
      </a>
      <a
        href="/CV.pdf"
        className="block px-5 py-4 text-black text-semibold hover:bg-blue-600 hover:text-white hover:transition-all duration-400 ml-auto"
        download="Joonatan_Karhu_CV"
      >
        <i className="fas fa-file-pdf mr-2"></i>

        <span>Download CV</span>
      </a>
    </div>
  );
};

export default DeskNav;
