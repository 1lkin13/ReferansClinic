import React, { useState, useEffect, useRef } from 'react';
import { doctors } from '../../DB/mockData/doctors';
import { useLanguage } from '../../context/LanguageContext';

const DoctorSection: React.FC = () => {
  const { data } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCardWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const gap = 24;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= doctors.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? doctors.length - 3 : prev - 1
    );
  };

  return (
    <div className="bg-[#00A6F2] min-h-screen py-16 font-sans">
      <div className="max-w-330 mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-white text-4xl lg:text-5xl font-bold font-['Questrial',sans-serif]">
            {data.doctorSection?.title || "Həkimlər"}
          </h2>
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 border-2 border-white bg-transparent rounded-full flex justify-center items-center hover:bg-white/10 transition-all"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full flex justify-center items-center hover:bg-gray-100 transition-all"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0083BF" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-x-hidden overflow-y-visible">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out py-6"
            style={{ 
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)` 
            }}
          >
            {doctors.map((doctor, index) => {
              // Map ID to 1-3 range for text data
              const textId = ((doctor.id - 1) % 3) + 1;
              // @ts-ignore
              const docData = data.doctorSection?.items?.[textId.toString()];
              
              return (
              <div 
                key={`${doctor.id}-${index}`}
                ref={index === 0 ? cardRef : null}
                className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="bg-white rounded-[23.32px] overflow-hidden h-132.5 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group cursor-pointer flex flex-col">
                  {/* Image Container - Top part with curve */}
                  <div className="relative w-full h-95 bg-white overflow-hidden shrink-0">
                     <img 
                      src={doctor.image} 
                      alt={docData?.name || ""}
                      className="w-full h-full object-cover object-center"
                      style={{ borderBottomRightRadius: '140px' }}
                    />
                  </div>
                  
                  {/* Text Container - White area at bottom */}
                  <div className="flex-1 px-8 pb-6 pt-4 flex flex-col justify-center bg-white">
                    <h3 className="text-[#3F3F3F] text-[31.64px] font-bold leading-[40.68px] tracking-[-0.01em] mb-1 font-['Questrial',sans-serif]">
                      {docData?.name || ""}
                    </h3>
                    <p className="text-[#3F3F3F] text-[19.44px] font-normal leading-[21.38px] tracking-[0] font-['Questrial',sans-serif]">
                      {docData?.specialty || ""}
                    </p>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;