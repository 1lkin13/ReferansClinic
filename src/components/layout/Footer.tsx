import React from "react";
import { useLanguage } from "../../context/LanguageContext.tsx";
import footerLogo from "../../assets/Footer/footer-logo.svg";
import fbIcon from "../../assets/Footer/facebook icon.svg";
import instIcon from "../../assets/Footer/instagram icon.svg";
import locationIcon from "../../assets/Footer/location icon.svg";
import mailIcon from "../../assets/Footer/mail icon.svg";
import phoneIcon from "../../assets/Footer/phone-icon.svg";
import arrowOutward from "../../assets/Footer/arrow_outward.svg";
import youtubeIcon from "../../assets/Footer/youtube-icon.svg";
import whatsappIcon from "../../assets/Footer/whatsapp-icon.svg";

const Footer: React.FC = () => {
  const { data } = useLanguage();
  const { footer } = data;
  const [inputValue, setInputValue] = React.useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0095DA] text-white pt-14.5 pb-10 relative overflow-hidden flex justify-center">
      {/* Container */}
      <div className="w-full max-w-360 px-10 xl:px-33.75 relative">
        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0">
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col gap-8 lg:w-100">
            <img
              src={footerLogo}
              alt="Lor Hospital"
              className="w-44 h-16.25 object-contain"
            />
            <p className="font-['Avant_Garde',sans-serif] font-normal text-[24px] leading-8 whitespace-pre-line">
              {footer.tagline}
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col gap-7 lg:mt-3">
            <h3 className="font-['Gilroy',sans-serif] font-bold text-[26.95px] leading-[34.13px] uppercase">
              {footer.contactTitle}
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
                <span className="font-['Avant_Garde',sans-serif] text-[18px]">
                  {footer.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img src={mailIcon} alt="Email" className="w-5 h-5" />
                <a
                  href={`mailto:${footer.email}`}
                  className="font-['Avant_Garde',sans-serif] text-[18px] underline decoration-1 underline-offset-4"
                >
                  {footer.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src={locationIcon}
                  alt="Address"
                  className="w-5 h-5 mt-1"
                />
                <span className="font-['Avant_Garde',sans-serif] text-[18px] whitespace-pre-line leading-relaxed max-w-75">
                  {footer.address}
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Subscribe / Social Text */}
          <div className="flex flex-col gap-7 lg:mt-3">
            <h3 className="font-['Gilroy',sans-serif] font-bold text-[26.95px] leading-[34.13px] uppercase">
              {footer.subscribeTitle}
            </h3>
            <div className="flex flex-col  gap-4">
              <a
                href="#"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src={fbIcon}
                  alt="Facebook"
                  className="w-4.5 h-4.5 brightness-0 invert"
                />
                <span className="font-['Avant_Garde',sans-serif] text-[18px]">
                  {footer.social.facebook}
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src={instIcon}
                  alt="Instagram"
                  className="w-4.5 h-4.5 brightness-0 invert"
                />
                <span className="font-['Avant_Garde',sans-serif] text-[18px]">
                  {footer.social.instagram}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Social Icons & Input */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-12">
          {/* Social Circles (White bg, blue icon) */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              className="w-15 h-15 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <img
                src={fbIcon}
                alt="Facebook"
                className="w-6 h-6"
                style={{
                  filter:
                    "invert(47%) sepia(89%) saturate(2289%) hue-rotate(178deg) brightness(93%) contrast(101%)",
                }}
              />
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-15 h-15 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <img
                src={instIcon}
                alt="Instagram"
                className="w-6 h-6"
                style={{
                  filter:
                    "invert(47%) sepia(89%) saturate(2289%) hue-rotate(178deg) brightness(93%) contrast(101%)",
                }}
              />
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-15 h-15 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="w-6 h-6"
                style={{
                  filter:
                    "invert(47%) sepia(89%) saturate(2289%) hue-rotate(178deg) brightness(93%) contrast(101%)",
                }}
              />
            </a>
            {/* WhatsApp */}
            <a
              href="#"
              className="w-15 h-15 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-6 h-6"
                style={{
                  filter:
                    "invert(47%) sepia(89%) saturate(2289%) hue-rotate(178deg) brightness(93%) contrast(101%)",
                }}
              />
            </a>
          </div>

          {/* Input Field with Arrow Button */}
          <div className="relative w-full max-w-[354.57px]">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={footer.subscribePlaceholder}
              className="w-full h-[69.16px] bg-[#008AC5] border-[1.8px] border-white rounded-full px-8 text-white placeholder-white/70 outline-none focus:border-white transition-colors text-[18px]"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12.5 h-12.5 bg-[#00B0FF] rounded-full flex items-center justify-center hover:bg-[#33C2FF] transition-all shadow-lg">
              <img
                src={arrowOutward}
                alt="Send"
                className={`w-5 h-5 brightness-0 invert transition-transform duration-300 ${
                  inputValue ? "rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/30 mt-14 mb-8 border-t-[0.9px] border-[#FFFFFF4D]" />

        {/* Scroll To Top Button (Positioned below line, align right usually or specifically placed) */}
        <div className="flex justify-end pb-4 pr-10 xl:pr-0">
          <button
            onClick={scrollToTop}
            className="w-12.5 h-12.5 border-[1.5px] border-white rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 animate-pulse"
            style={{
              animation: "gentle-float 2s ease-in-out infinite",
            }}
          >
            <svg
              width="18"
              height="10"
              viewBox="0 0 14 8"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 7L7 1L1 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
