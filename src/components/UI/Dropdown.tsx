import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

interface MenuItem {
  id: string;
  label: string;
  path: string;
  children?: MenuItem[];
}

interface DropdownProps {
  item: MenuItem;
}

const Dropdown: React.FC<DropdownProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const hasChildren = item.children && item.children.length > 0;

  const isActive =
    location.pathname === item.path ||
    (item.path !== "/" && location.pathname.startsWith(item.path));

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={item.path}
        className={`text-[18px] xl:text-[20.77px] font-bold leading-6.25 tracking-[-0.05em] px-3 xl:px-4 py-2 transition-colors whitespace-nowrap font-['Avant_Garde',sans-serif] align-middle ${
          isActive ? "text-[#0095DA]" : "text-[#8A8A8A] hover:text-[#0095DA]"
        }`}
      >
        {item.label}
      </Link>

      {hasChildren && isOpen && (
        <div className="absolute top-full left-0 min-w-70 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3 z-50 flex flex-col gap-1">
          {item.children?.map((child) => (
            <DropdownItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const DropdownItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;

  const isActive =
    location.pathname === item.path ||
    (item.path !== "/" && location.pathname.startsWith(item.path));

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsSubOpen(true)}
      onMouseLeave={() => setIsSubOpen(false)}
    >
      <Link
        to={item.path}
        className={`block px-3 py-2 text-[14px] leading-[24.28px] tracking-[0%] rounded font-normal transition-colors font-['Avant_Garde',sans-serif] ${
          isActive
            ? "text-[#0095DA] font-bold"
            : "text-[#303030] hover:text-[#0095DA]"
        }`}
      >
        {item.label}
      </Link>
      {hasChildren && isSubOpen && (
        <div className="absolute top-0 left-full ml-1 min-w-70 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 p-3 z-50 flex flex-col gap-1">
          {item.children?.map((child) => (
            <DropdownItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
