import Image from "next/image";
import "./Fade.css";
import { useEffect, useState } from "react";
import "./FadeRightToLeft.css";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDeskVisible, setIsDeskVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  useEffect(() => {
    setIsDeskVisible(true);
  }, []);
  return (
    <div className="lg:w-1/2 lg:top-[-40px] mt-10 md:mt-20 lg:mt-0 lg:flex lg:flex-col lg:items-center relative ">
      <div
        className={`${
          isVisible ? "animate-fade" : "opacity-0"
        }  flex flex-col-reverse  relative items-center justify-center lg:hidden`}
      >
        <div className="w-full  mt-2 mobileX:mt-5">
          <p className="lg:hidden text-lg mobileX:text-xl text-gray-900/80 almostIpad:max-w-[600px] almostIpad:tracking-normal">
            <i class="fa-solid fa-mug-hot mr-2"></i>Hello, I am a developer with
            a strong passion for coffee, programming and learning new things. I
            am currently <b>open for work</b>
          </p>
        </div>
      </div>

      <div className="hidden lg:block w-[30%] xlg:w-[30%]">
        <img
          src="/joona.jpg"
          // src="/profile_picture.png"
          width={250}
          height={250}
          alt="Picture of the author"
          className="rounded-xl shadow-xl border-[0px]"
        />
      </div>

      <div
        className={`${
          isDeskVisible ? "animate-fadeRightToLeft" : "opacity-0"
        } hidden  lg:flex lg:flex-col lg:items-center`}
      >
        <div
          className={`hidden lg:block lg:mx-12 lg:bg-white lg:rounded-xl shadow-md border-[1px] lg:px-5 py-4 lg:z-10 lg:mt-8`}
        >
          <p className="text-lg text-gray-600">
            Hello, I am a developer with a strong passion for coffee,
            programming and learning new things. I am currently{" "}
            <b>open for work</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
