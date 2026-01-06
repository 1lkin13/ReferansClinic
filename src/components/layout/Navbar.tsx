import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.tsx";
import Dropdown from "../UI/Dropdown";
import Input from "../UI/Input";
import Button from "../UI/Button";
import logo from "../../assets/Logo.svg";
import searchIcon from "../../assets/Nav/search-icon.svg";

const Navbar: React.FC = () => {
  const { data } = useLanguage();
  const { contact, navigation } = data.header;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveRoute = (path: string) => {
    // Exact match or starts with the path (for sub-routes)
    if (location.pathname === path) return true;
    // Check if we're on a sub-route of this path
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <div className="w-full h-22 md:h-25 bg-white shadow-sm flex justify-center border-b border-[#E8E8E8]">
        <div className="w-full max-w-366 flex justify-between items-center px-4 md:px-10 xl:px-25 h-full">
          <Link to="/" className="shrink-0 cursor-pointer">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-32 md:h-16.25 md:w-44"
            />
          </Link>

          <nav className="hidden lg:flex items-center h-full">
            {navigation.map((item: any) => (
              <Dropdown key={item.id} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-6">
            <Input
              placeholder={data.header.searchPlaceholder || "Axtarış"}
              containerClassName="w-[120px] xl:w-[139px] h-[40px] xl:h-[45px] hidden md:flex"
              icon={
                <img
                  src={searchIcon}
                  alt="Search"
                  className="w-[13.12px] h-[13.12px]"
                />
              }
            />

            <Button className="pl-2 pr-4 xl:pr-6 py-2 gap-2 bg-[#0095DA] hover:bg-[#0084c2] shadow-[0px_4px_14px_0px_rgba(15,179,255,0.55)] hidden md:flex">
              <div className="bg-white/20 p-1 rounded-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="0"
                  className="transform rotate-90"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className="text-[18px] xl:text-[20px] font-bold tracking-[-0.05em] font-['Avant_Garde',sans-serif]">
                {contact.phone}
              </span>
            </Button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-[#303030] transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-[#303030] transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-[#303030] transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={toggleMobileMenu}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <span className="text-xl font-bold text-[#0095DA]">Menu</span>
                <button
                  onClick={toggleMobileMenu}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#0095DA]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-6">
                {navigation.map((item: any) => {
                  const isActive = isActiveRoute(item.path);
                  return (
                    <div key={item.id} className="mb-4">
                      <Link
                        to={item.path}
                        onClick={toggleMobileMenu}
                        className={`block py-3 px-4 rounded-lg font-semibold transition-colors ${
                          isActive
                            ? "bg-[#0095DA]/10 text-[#0095DA]"
                            : "text-[#303030] hover:bg-[#F5F5F5] hover:text-[#0095DA]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
              </nav>

              {/* Contact Button in Sidebar */}
              <div className="p-6 border-t border-gray-200">
                <Button className="w-full pl-2 pr-6 py-3 gap-2 bg-[#0095DA] hover:bg-[#0084c2] shadow-[0px_4px_14px_0px_rgba(15,179,255,0.55)] justify-center">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="0"
                      className="transform rotate-90"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="text-[20px] font-bold tracking-[-0.05em]">
                    {contact.phone}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
