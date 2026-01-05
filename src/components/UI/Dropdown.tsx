import React, { useState } from 'react'

interface MenuItem {
  id: string
  label: string
  path: string
  children?: MenuItem[]
}

interface DropdownProps {
  item: MenuItem
}

const Dropdown: React.FC<DropdownProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const hasChildren = item.children && item.children.length > 0

  return (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a 
        href={item.path} 
        className="text-[#8A8A8A] hover:text-[#0095DA] text-[20.77px] font-bold leading-6.25 tracking-[-0.05em] px-4 py-2 transition-colors whitespace-nowrap font-['Avant_Garde',sans-serif] align-middle"
      >
        {item.label}
      </a>

      {hasChildren && isOpen && (
        <div className="absolute top-full left-0 min-w-62.5 bg-white/75 backdrop-blur-[6.3px] rounded-[5.61px] shadow-[inset_-5px_2px_4px_-6px_rgba(87,87,87,0.41)] p-4 z-50 flex flex-col gap-1">
          {item.children?.map((child) => (
              <DropdownItem key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}

const DropdownItem: React.FC<{ item: MenuItem }> = ({ item }) => {
    const [isSubOpen, setIsSubOpen] = useState(false)
    const hasChildren = item.children && item.children.length > 0

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsSubOpen(true)}
            onMouseLeave={() => setIsSubOpen(false)}
        >
            <a 
                href={item.path}
                className="block px-2 py-1.5 text-[#303030] text-[14px] leading-[24.28px] tracking-[0%] hover:text-[#0095DA] rounded font-normal transition-colors font-['Avant_Garde',sans-serif]"
            >
                {item.label}
            </a>
            {hasChildren && isSubOpen && (
                 <div className="absolute top-0 left-full ml-1 min-w-62.5 bg-white/75 backdrop-blur-[6.3px] rounded-[5.61px] shadow-[inset_-5px_2px_4px_-6px_rgba(87,87,87,0.41)] p-4 z-50 flex flex-col gap-1">
                    {item.children?.map((child) => (
                        <DropdownItem key={child.id} item={child} />
                    ))}
                 </div>
            )}
        </div>
    )
}

export default Dropdown
