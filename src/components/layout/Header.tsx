import React from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'

const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col font-['Avant_Garde',sans-serif]">
      <TopBar />
      <Navbar />
    </header>
  )
}

export default Header
