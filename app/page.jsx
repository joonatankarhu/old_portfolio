'use client'

import Hero from './components/hero/Hero'
import About from './components/About'
import Education from './components/Education'
import Contact from './components/Contact.jsx'
import Navbar from './components/navbar/Navbar'

import Section from './components/Section'
import SectionTitle from './components/SectionTitle'
import HeyBeautyCollections from './components/work/HeyBeautyCollections'

export default function Home() {

  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-center px-3  lessSmall:px-5 md:px-8 lg:px-10 mt-[56px] scroll-smooth lg:pb-0">
        
        <Hero />

        <Section id="work">
          <SectionTitle title={'Work Experience'} />
          <HeyBeautyCollections />
        </Section>

        <Section id="education">
          <SectionTitle title={'Education'} />
          <Education/>
        </Section>


        <Section id="about">
          <SectionTitle title={'About Me'} />
          <About />
        </Section>

        <Section id="contact">
          <SectionTitle title={'Get in touch'} />
          <Contact />
        </Section>

      </main>
    </>
  )
}
