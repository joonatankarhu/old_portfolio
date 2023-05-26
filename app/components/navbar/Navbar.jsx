'use client'
import Hamburger from './Hamburger'
import MobileNav from './MobileNav'
import DeskNav from './DeskNav'

import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(0)

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [backToTop, setBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      if (currentScrollPos > 500) {
        setBackToTop(true)
      }
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
          {backToTop && (
            <a
              href="#home"
              onClick={() => {
                setIsOpen(false)
              }}
              className={`${
                backToTop
                  ? 'opacity-100 transition-opacity duration-5000'
                  : 'opacity-0'
              } z-[110] block rounded-lg px-2 py-2 text-gray-600/80 font-medium hover:bg-gray-100 hover:text-black text-base`}
            >
              Back to Top
            </a>
          )}

          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {isOpen && (
          <MobileNav
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            navHeight={navHeight}
          />
        )}
      </div>
    </>
  )
}

export default Navbar
