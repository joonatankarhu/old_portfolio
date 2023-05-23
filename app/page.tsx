import Hero from './components/hero/Hero'
import Work from './components/work/Work'
import About from './components/About'
import Contact from './components/Contact.jsx'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 mobileX:px-5 md:px-8 lg:px-10 mt-[56px] scroll-smooth">
      <Hero />
      <div id="work">
        <Work />
      </div>
      <About />
      <Contact />
    </main>
  )
}
