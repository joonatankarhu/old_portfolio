'use client'

import Hero from './components/hero/Hero'
import Work from './components/work/Work'
import About from './components/About'
import Education from './components/Education'
import Contact from './components/Contact.jsx'
import Navbar from './components/navbar/Navbar'

export default function Home() {

  return (
    <div>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-between px-3  lessSmall:px-4 mobileX:px-5 md:px-8 lg:px-10 mt-[56px] scroll-smooth">
        <Hero />

        <div id="work">
          <Work />
        </div>

        <Education/>

        <About />

        <Contact />
      </main>
    </div>
  )
}
