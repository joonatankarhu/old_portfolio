const MobileNav = ({ navHeight }) => {
  return (
    <div
      className={`bg-white z-[50] absolute top-[${navHeight}px] w-full shadow-lg z-20 px-1`}
    >
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Menu Item 1
      </a>
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Menu Item 2
      </a>
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Menu Item 3
      </a>
    </div>
  )
}

export default MobileNav
