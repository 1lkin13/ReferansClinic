import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext.tsx";
import instIcon from "../../assets/Nav/topbar-inst-icon.svg";
import fbIcon from "../../assets/Nav/topbar-fb-icon.svg";
import langIcon from "../../assets/Nav/topbar-language-icon.svg";
import loginIcon from "../../assets/Nav/topbar-login-icon.svg";

const TopBar: React.FC = () => {
  const { data, currentLanguage, changeLanguage } = useLanguage();
  const { topBar } = data.header;
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-14.5 bg-[#FAFAFA] border-b-[0.5px] border-[#E8E8E8] flex justify-between items-center px-10 xl:px-25">
      <div className="flex items-center gap-4">
        <a href="#" className="transition-transform hover:scale-110">
          <img src={instIcon} alt="Instagram" className="w-3.75 h-3.75" />
        </a>
        <a href="#" className="transition-transform hover:scale-110">
          <img src={fbIcon} alt="Facebook" className="w-3.75 h-3.75" />
        </a>
      </div>

      <div className="flex items-center gap-6 divide-x divide-[#E5E5E5]">
        <a
          href="#"
          className="flex items-center gap-2 text-[#8A8A8A] text-[14.84px] font-normal hover:text-[#0095DA] transition-colors pl-6 first:pl-0"
        >
          <img src={loginIcon} alt="Login" className="w-3.75 h-3.75" />
          {topBar.login}
        </a>

        <div className="relative pl-6" ref={langDropdownRef}>
          <div
            className="flex items-center gap-2 text-[#8A8A8A] text-[14.84px] cursor-pointer hover:text-[#0095DA] transition-colors select-none"
            onClick={toggleLangDropdown}
          >
            <img src={langIcon} alt="Language" className="w-3.75 h-3.75" />
            <span className="uppercase">{currentLanguage}</span>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${
                isLangOpen ? "rotate-180" : ""
              }`}
            >
              <path d="M1 1L5 5L9 1" />
            </svg>
          </div>

          {isLangOpen && (
            <div
              className="absolute z-50 flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 shadow-lg"
              style={{
                width: "70px",
                top: "32px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {topBar.languages
                .filter((lang: any) => lang.code !== currentLanguage)
                .map((lang: any) => (
                  <div
                    key={lang.code}
                    className="py-2 w-full text-center hover:bg-gray-50 cursor-pointer text-[#8A8A8A] hover:text-[#0095DA] text-[13px] uppercase first:rounded-t-lg last:rounded-b-lg transition-colors"
                    onClick={() => {
                      changeLanguage(lang.code as any);
                      setIsLangOpen(false);
                    }}
                  >
                    {lang.label}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
