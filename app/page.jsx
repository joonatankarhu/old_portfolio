'use client'

import Hero from './components/hero/Hero'
import About from './components/About'
import Education from './components/Education'
import Contact from './components/Contact.jsx'
import Navbar from './components/navbar/Navbar'

import SectionWrapper from './components/SectionWrapper'
import SubTitle from './components/SubTitle'
import HeyBeautyCollections from './components/work/HeyBeautyCollections'

export default function Home() {

  return (
    <div>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-center px-3  lessSmall:px-5 md:px-8 lg:px-10 mt-[56px] scroll-smooth lg:pb-10">
        
        <Hero />

        <SectionWrapper id="work">
          <SubTitle title={'My Work'} />
          <HeyBeautyCollections />
        </SectionWrapper>

        <SectionWrapper id="education">
          <SubTitle title={'Education'} />
          <Education/>
        </SectionWrapper>


        <SectionWrapper id="about">
          <SubTitle title={'About'} />
          <About />
        </SectionWrapper>

        <SectionWrapper id="contact">
          <SubTitle title={'Get in touch'} />
          <Contact />
        </SectionWrapper>

      </main>
    </div>
  )
}
