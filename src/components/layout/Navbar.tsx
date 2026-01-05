import React from 'react'
import { useLanguage } from '../../context/LanguageContext.tsx'
import Dropdown from '../UI/Dropdown'
import Input from '../UI/Input'
import Button from '../UI/Button'
import logo from '../../assets/Logo.svg'
import searchIcon from '../../assets/Nav/search-icon.svg'

const Navbar: React.FC = () => {
  const { data } = useLanguage()
  const { contact, navigation } = data.header

  return (
    <div className="w-full h-25 bg-white shadow-sm flex justify-center">
      <div className="w-full max-w-366 flex justify-between items-center px-10 xl:px-25 h-full">
        <div className="shrink-0">
            <img src={logo} alt="Logo" className="h-16.25 w-44" />
        </div>

        <nav className="hidden lg:flex items-center  h-full"> 
          {navigation.map((item: any) => (
              <Dropdown key={item.id} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Input 
              placeholder="Axtarış" 
              containerClassName="w-[139px] h-[45px] hidden xl:flex"
              icon={
                  <img src={searchIcon} alt="Search" className="w-[13.12px] h-[13.12px]" />
              }
          />
          
          <Button className="pl-2 pr-6 py-2 gap-2 bg-[#0095DA] hover:bg-[#0084c2] shadow-[0px_4px_14px_0px_rgba(15,179,255,0.55)]">
              <div className="bg-white/20 p-1 rounded-full">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" className="transform rotate-90">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
              </div>
              <span className="text-[20px] font-bold tracking-[-0.05em]">{contact.phone}</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
