'use client'
import Image from 'next/image'
import Hamburger from './Hamburger'
import MobileNav from './MobileNav'
import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [navHeight, setNavHeight] = useState(0)

  const componentRef = useRef(null)
  let componentHeight = 0

  useEffect(() => {
    if (componentRef.current) {
      componentHeight = componentRef.current.offsetHeight
      setNavHeight(componentHeight)
    }
  }, [])

  return (
    <div ref={componentRef} className="flex justify-between w-full px-5 bg-red-600">
      <div>
        <Image
          src="/profile_picture.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <MobileNav navHeight={navHeight} />}
    </div>
  )
}

export default Navbar
