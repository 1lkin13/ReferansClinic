import React from "react";
import { useLanguage } from "../../context/LanguageContext";

interface SidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const { data } = useLanguage();

  // Find "Haqqımızda" navigation item to get its children
  // Usually ID is "haqqimizda" based on az.json structure
  const aboutNav = data?.header?.navigation?.find(
    (item: any) => item.id === "haqqimizda"
  );
  const menuItems = aboutNav?.children || [];

  return (
    <div className="flex flex-col gap-4 font-['Avant_Garde',sans-serif]">
      {menuItems.map((item: any) => {
        const isActive = activeTab === item.id;

        return (
          <div
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`
              relative flex items-center justify-between px-8 cursor-pointer transition-all duration-200 group
              ${isActive ? "bg-[#f7faff]" : "bg-[#f7faff] hover:bg-[#f1f4fc]"}
            `}
            style={{
              width: "432.92px",
              height: "78.31px",
              borderRadius: "13.62px",
              // border: isActive ? '0.57px solid #0095DA' : '0.57px solid transparent',
            }}
          >
            <span
              className={`text-[#303030] tracking-[0.02em] text-[22px] leading-[24.97px] ${
                isActive ? "font-bold" : "font-normal"
              } font-['Questrial',sans-serif]`}
            >
              {item.label}
            </span>

            <div
              className="flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110"
              style={{
                width: "57.12px",
                height: "37.73px",
                borderRadius: "13.05px",
                backgroundColor: isActive ? "#0095DA" : "#FFFFFF",
              }}
            >
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 15L8.5 8L1.5 1"
                  stroke={isActive ? "#FFFFFF" : "#0095DA"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
