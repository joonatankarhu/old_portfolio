import Hero from './components/hero/hero'
import Work from './components/work/Work'
import Contact from './components/Contact.jsx'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 mobileX:px-5 md:px-8 lg:px-10 mt-[56px]">
      <Hero />
      <Work />
      <Contact/>
    </main>
  )
}
