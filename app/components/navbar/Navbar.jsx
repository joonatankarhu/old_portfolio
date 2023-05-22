'use client'
import Image from 'next/image'
import Hamburger from './Hamburger'
import MobileNav from "./MobileNav"
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-between w-full px-5">
      <div>
        <Image
          src="/profile_picture.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className="absolute top-0 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
          {/* Add your menu items here */}
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Menu Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Menu Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Menu Item 3
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar
