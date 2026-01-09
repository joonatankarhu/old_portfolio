"use client";

import { useState } from "react";
import Hero from "./components/hero/Hero";
import Education from "./components/Education";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import HeyBeautyCollections from "./components/work/HeyBeautyCollections";
import RiotsGlobal from "./components/work/RiotsGlobal";
import Biila from "./components/work/Biila";

import CardAboutMe from "./components/CardAboutMe";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
      fixed inset-0 z-[15]
      bg-black/10
      transition-opacity duration-300
      lg:hidden
    "
        />
      )}

      <div className="flex flex-col items-center justify-center">
        <main className="flex min-h-screen flex-col items-center justify-center px-3  lessSmall:px-5 md:px-8 lg:px-10 mt-[56px] scroll-smooth lg:pb-0 xlg:max-w-[1200px]">
          <Hero />
          <Section id="work">
            <SectionTitle title={"Experience"} />
            <Biila />
          </Section>
          <Section id="work">
            <RiotsGlobal />
          </Section>
          <Section>
            <SectionTitle title={"Projects"} />
            <HeyBeautyCollections />
          </Section>
          <Section id="education">
            <SectionTitle title={"Education"} />
            <Education />
          </Section>
          <Section id="about">
            <SectionTitle title={"About Me"} />
            <CardAboutMe />
          </Section>
          <Section id="contact">
            <SectionTitle title={"Get in touch"} />
            <Contact />
          </Section>
        </main>
      </div>
    </>
  );
}
