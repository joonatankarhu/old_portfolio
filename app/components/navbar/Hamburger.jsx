"use client";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      onClick={() => setIsOpen(!isOpen)}
      className="
        ml-auto relative z-[100]
        flex flex-col justify-center items-center
        w-10 h-10
        lg:hidden
        group
      "
    >
      {/* Top line */}
      <span
        className={`
          block w-7 h-[2.5px] bg-black
          transition-all duration-300 ease-in-out
          ${
            isOpen ? "rotate-45 translate-y-[7px]" : "group-hover:translate-y-1"
          }
        `}
      />

      {/* Middle line */}
      <span
        className={`
          block w-7 h-[2.5px] bg-black my-[5px]
          transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-0" : "group-hover:opacity-70"}
        `}
      />

      {/* Bottom line */}
      <span
        className={`
          block w-7 h-[2.5px] bg-black
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "-rotate-45 -translate-y-[7px]"
              : "group-hover:-translate-y-1"
          }
        `}
      />
    </button>
  );
};

export default Hamburger;
