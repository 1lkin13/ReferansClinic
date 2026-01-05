import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext.tsx'
import instIcon from '../../assets/topbar-inst-icon.svg'
import fbIcon from '../../assets/topbar-fb-icon.svg'
import langIcon from '../../assets/topbar-language-icon.svg'
import loginIcon from '../../assets/topbar-login-icon.svg'

const TopBar: React.FC = () => {
  const { data, currentLanguage, changeLanguage } = useLanguage()
  const { topBar } = data.header
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langDropdownRef = useRef<HTMLDivElement>(null)

  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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

      <div className="flex items-center gap-6">
        <a href="#" className="flex items-center gap-2 text-[#8A8A8A] text-[14.84px] font-normal hover:text-[#0095DA] transition-colors">
            <img src={loginIcon} alt="Login" className="w-3.75 h-3.75" />
            {topBar.login}
        </a>

        <div className="relative" ref={langDropdownRef}>
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
                    className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                >
                    <path d="M1 1L5 5L9 1"/>
                </svg>
            </div>
          
            {isLangOpen && (
                <div 
                    className="absolute z-50 flex flex-col items-center justify-center bg-white/75 rounded-lg"
                    style={{
                        width: '55px',
                        top: '28px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backdropFilter: 'blur(45.29px)',
                        boxShadow: '0px 0.91px 2.72px 0px #7D7D7D40'
                    }}
                >
                    {/* Arrow */}
                    <div 
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white/75 rotate-45 z-10"
                        style={{
                           backdropFilter: 'blur(45.29px)',
                        }}
                    />

                    {topBar.languages
                        .filter((lang: any) => lang.code !== currentLanguage)
                        .map((lang: any) => (
                            <div 
                                key={lang.code} 
                                className="py-1.5 w-full text-center hover:bg-black/5 cursor-pointer text-[#8A8A8A] text-[13px] uppercase first:rounded-t-lg last:rounded-b-lg relative z-20"
                                onClick={() => {
                                    changeLanguage(lang.code as any)
                                    setIsLangOpen(false)
                                }}
                            >
                                {lang.label}
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default TopBar
