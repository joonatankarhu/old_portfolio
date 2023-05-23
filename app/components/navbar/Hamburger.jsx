'use client'

import { useState } from "react";

const Hamburger = ({ isOpen, setIsOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleToggle}
        className={`block focus:outline-none transition-transform duration-1000 transform ${
          isHovered && !isOpen ? 'rotate-90 text-gray-700' : 'rotate-0 hover:rotate-90 hover:text-gray-700'
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <svg
          className="w-8 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
    </div>
  )
}

export default Hamburger
