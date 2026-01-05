import React from 'react';
import buildingImage from '../../assets/WhyUs/photo 1.png';
import { useLanguage } from '../../context/LanguageContext';

const WhyUsSection: React.FC = () => {
  const { data } = useLanguage();

  return (
    <div className="bg-white py-16 lg:py-24 font-['Questrial',sans-serif]">
      <div className="max-w-330 mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col gap-6">
             <h2 className="text-[#3F3F3F] text-[40px] md:text-[45.9px] font-bold leading-[1.2] tracking-[-0.03em]">
              {data.whyUsSection.title}
            </h2>
            
             <div className="max-w-133.25 text-[#0F0F0F] opacity-70 text-[22px] font-normal leading-[1.4] tracking-[-0.02em] flex flex-col gap-4 text-left">
              <p>{data.whyUsSection.p1}</p>
              <p>{data.whyUsSection.p2}</p>
              <p>{data.whyUsSection.p3}</p>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-auto w-full flex justify-center lg:justify-end">
             <div className="relative overflow-hidden w-full max-w-164.5 h-auto md:h-180.75 shrink-0" style={{ borderRadius: '15.3px'}}>
              <img 
                src={buildingImage} 
                alt="Lor Hospital Building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
