import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  className?: string
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'flex items-center justify-center rounded-full transition-colors cursor-pointer'
  const variants = {
    primary: 'bg-[#0095DA] text-white hover:bg-[#0084c2]',
    outline: 'border border-[#E8E8E8] bg-white text-[#8A8A8A] hover:bg-gray-50'
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
