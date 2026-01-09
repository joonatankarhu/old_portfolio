"use client";
import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";
import DeskNav from "./DeskNav";

import { useEffect, useRef, useState } from "react";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [navHeight, setNavHeight] = useState(0);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const componentRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (componentRef.current) {
        setNavHeight(componentRef.current.offsetHeight);
      }
    };

    updateHeight(); // initial measure
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <div
        className={`hidden lg:flex fixed z-50 top-0 w-full bg-white transition-all duration-500 ${
          visible ? "opacity-100 h-auto" : "opacity-0 h-0"
        }`}
        style={{ height: visible ? `${navHeight}px` : "0" }}
      >
        <DeskNav />
      </div>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[20] bg-white ">
        <div
          ref={componentRef}
          className="lg:hidden flex relative items-center w-full px-8 py-3 shadow-sm"
        >
          <a href="#home">
            <div className="flex items-center ">
              <div className="max-w-[42px] z-[100]">
                <img
                  src="/icon.png"
                  width={90}
                  height={90}
                  alt="Picture of the author"
                  className="rounded-full"
                />
              </div>
              <div className="font-semibold ml-3 text-xl">
                <p>Joonatan Karhu</p>
              </div>
            </div>
          </a>
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <MobileNav
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navHeight={navHeight}
        />
      </div>
    </>
  );
};

export default Navbar;
