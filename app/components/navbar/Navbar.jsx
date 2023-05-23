'use client'
import Hamburger from './Hamburger'
import MobileNav from './MobileNav'
import DeskNav from './DeskNav'

import { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  const [navHeight, setNavHeight] = useState(0)

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const [isOpen, setIsOpen] = useState(false)

  const dropdown = useRef(null)
  useEffect(() => {
    if (!isOpen) return
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [isOpen])

  const componentRef = useRef(null)
  let componentHeight = 0

  useEffect(() => {
    if (componentRef.current) {
      componentHeight = componentRef.current.offsetHeight
      setNavHeight(componentHeight)
    }
  }, [])


  return (
    <>
      <div
        className={`hidden lg:flex fixed z-50 top-0 w-full bg-white transition-all duration-500 ${
          visible ? 'opacity-100 h-auto' : 'opacity-0 h-0'
        }`}
        style={{ height: visible ? `${navHeight}px` : '0' }}
      >
        <DeskNav />
      </div>
      <div
        ref={dropdown}
        className="lg:hidden fixed top-0 left-0 right-0 z-[20] bg-white"
      >
        <div
          ref={componentRef}
          className="lg:hidden flex relative items-center w-full px-5 py-2 shadow-sm"
        >
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {isOpen && <MobileNav navHeight={navHeight} />}
      </div>
    </>
  )
}

export default Navbar
