const MobileNav = ({ navHeight }) => {
  console.log(navHeight)
  return (
    <div className={`absolute top-[${navHeight}px] w-full bg-white rounded-md shadow-lg py-2 z-10`}>
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
        Menu Item 11
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
