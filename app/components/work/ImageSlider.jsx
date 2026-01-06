"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ImageSlider({ images = [], className = '' }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!images || images.length <= 1 || paused) return
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(t)
  }, [images, paused])

  if (!images || images.length === 0) return null

  return (
    <div className={`w-full ${className}`}>
      <div
        className="relative w-full h-full overflow-hidden rounded-md bg-transparent shadow-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="w-full h-full flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-full h-full flex justify-center items-center p-0">
              <div className="w-full h-full p-0 flex justify-center items-center">
                <img src={src} alt={`slide-${i}`} className="max-h-[360px] md:max-h-[520px] lg:max-h-[640px] xl:max-h-[720px] 2xl:max-h-[800px] object-contain w-full" />
              </div>
            </div>
          ))}
        </div>
        {/* Prev/Next buttons */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-indigo-600 hover:text-white text-gray-800 rounded-full shadow-lg border border-gray-200 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-colors duration-200 z-10"
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-indigo-600 hover:text-white text-gray-800 rounded-full shadow-lg border border-gray-200 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-colors duration-200 z-10"
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  )
}
