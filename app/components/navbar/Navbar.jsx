'use client'
import Image from 'next/image'
import Hamburger from './Hamburger'
import MobileNav from './MobileNav'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

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
    <div className='fixed top-0 left-0 right-0'>
      <div
        ref={componentRef}
        className="flex relative items-center justify-between w-full px-5 py-2 shadow-sm"
      >
        <Link href="/" className='w-8'>
          <Image
            src="/profile_picture.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </Link>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && <MobileNav navHeight={navHeight} />}
    </div>
  )
}

export default Navbar
