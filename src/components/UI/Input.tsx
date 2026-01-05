import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  containerClassName?: string
}

const Input: React.FC<InputProps> = ({ 
  icon, 
  className = '', 
  containerClassName = '', 
  ...props 
}) => {
  return (
    <div className={`relative flex items-center ${containerClassName}`}>
      {icon && (
        <span className="absolute left-3 text-[#E8E8E8] pointer-events-none">
          {icon}
        </span>
      )}
      <input
        className={`w-full h-full rounded-full border-[0.82px] border-[#E8E8E8] bg-white px-4 py-2 text-[14.76px] leading-[19.68px] tracking-[-0.05em] text-[#8A8A8A] placeholder-[#8A8A8A] font-['Poppins',sans-serif] font-normal focus:outline-none focus:border-[#0095DA] transition-colors ${icon ? 'pl-10' : ''} ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input
