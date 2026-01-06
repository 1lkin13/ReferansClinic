import React from "react";
import whatsappIcon from "../../assets/whatsapp.svg";

const FloatingContactButtons: React.FC = () => {
  return (
    <div className="w-full flex justify-center gap-6 mt-8 md:mt-0 md:absolute md:right-8 lg:right-12 md:bottom-12 md:z-50 md:flex-col md:gap-4 md:w-auto">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/994XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-20.75 h-20.75 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background:
            "radial-gradient(circle, rgba(132, 216, 76, 0.4) 0%, rgba(132, 216, 76, 0.6) 60%, #84D84C 100%)",
          animation: "gentle-float 2s ease-in-out infinite",
        }}
      >
        {/* Inner Solid Circle */}
        <div className="w-14 h-14 bg-[#84D84C] rounded-full flex items-center justify-center z-10 shadow-sm">
          <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
        </div>
      </a>

      {/* Phone Button */}
      <a
        href="tel:*0111"
        className="group relative w-20.75 h-20.75 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 175, 240, 0.4) 0%, rgba(0, 175, 240, 0.6) 60%, #00AFF0 100%)",
          animation: "gentle-float 2s ease-in-out infinite 0.5s",
        }}
      >
        {/* Inner Solid Circle */}
        <div className="w-14 h-14 bg-[#00AFF0] rounded-full flex items-center justify-center z-10 shadow-sm">
          {/* Phone Icon SVG */}
          <svg
            width="28"
            height="28"
            viewBox="-3 -3 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.12 14.25C8.84 15 9.69 15.7 10.51 16.3C11.05 16.7 11.82 17.4 12.46 16.9C13.08 16.4 13.57 14.6 14.58 14.6C14.86 14.61 15.67 14.92 15.96 15.03C17.24 15.53 19.23 16.33 20.33 17.11C21.13 17.68 21.06 18.31 20.89 19.22C20.5 21.3 18.83 23.3 16.81 23.81C11.75 25.07 6.68 19.93 3.7 16.29C1.34 13.4 -1.57 9.07 -1.96 5.23C-2.3 1.88 -0.54 -1.34 2.82 -1.89C4.63 -2.19 5.5 -1.96 6.01 -0.06C6.38 1.3 6.89 3.52 6.99 4.89C7.09 6.2 5.21 6.37 4.48 6.94C4.05 7.27 4.23 7.82 4.37 8.29C4.95 10.26 6.69 12.81 8.12 14.25Z"
              fill="white"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default FloatingContactButtons;
