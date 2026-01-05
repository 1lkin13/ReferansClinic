import React, { useState } from 'react'
import Sidebar from '../components/About/Sidebar'
import DoctorsGrid from '../components/About/DoctorsGrid'
import Empty from '../components/About/Empty'

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("hekimlerimiz");

  return (
    <div className="bg-white pt-10 pb-20 font-sans min-h-screen">
       
      <div className="max-w-360 mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            {/* Sidebar */}
            <div className="shrink-0 hidden lg:block">
                <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
            
            {/* Main Content */}
            <div className="flex-1 w-full max-w-222.5">
                {activeTab === "hekimlerimiz" ? (
                    <DoctorsGrid />
                ) : (
                    <Empty />
                )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
