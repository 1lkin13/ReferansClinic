import React from "react";
import { useLanguage } from "../../context/LanguageContext.tsx";
import moni from "../../assets/moni.png";
import arrowOutward from "../../assets/Footer/arrow_outward.svg";
import FloatingContactButtons from "./FloatingContactButtons.tsx";

const Banner: React.FC = () => {
  const { data } = useLanguage();
  const { title, button } = data.banner;

  return (
    <section className="relative w-full h-125 overflow-hidden ">
      {/* IMAGE SIDE */}
      <div className="absolute inset-0 z-0">
        <img
          src={moni}
          alt="LOR Hospital"
          className="w-full h-full object-cover translate-x-px"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-366 mx-auto px-6 sm:px-10 flex items-center justify-center md:justify-start">
        <div className="max-w-120 flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
          {/* TITLE */}
          <h1
            className="
              font-['Avant_Garde',sans-serif]
              font-bold
              text-[32px] md:text-[45px]
              leading-10 md:leading-11.25
              tracking-normal
              text-[#464646]
              whitespace-pre-line
            "
          >
            {title}
          </h1>

          {/* BUTTON */}
          <button
            className="
              group flex items-center justify-between
              w-50 h-12
              bg-linear-to-r from-[#14B0F9] to-[#0197DC]
              rounded-full pl-5 pr-2
              shadow-[0px_5px_18px_rgba(1,151,220,0.32)]
              transition-all hover:scale-[1.03]
            "
          >
            <span className="font-['Avant_Garde',sans-serif] font-semibold text-base text-white">
              {button}
            </span>

            <div
              className="
                w-9.5 h-9.5
                rounded-full
                bg-white/25
                flex items-center justify-center
                backdrop-blur-sm
                transition group-hover:bg-white/40
              "
            >
              <img src={arrowOutward} alt="arrow" className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <FloatingContactButtons />
    </section>
  );
};

export default Banner;
