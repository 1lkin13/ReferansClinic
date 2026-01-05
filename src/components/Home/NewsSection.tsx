import React, { useState, useRef, useEffect } from 'react';
import { newsImages } from '../../DB/mockData/news';
import { useLanguage } from '../../context/LanguageContext';

const NewsSection: React.FC = () => {
  const { data } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const gap = 24;

  const combinedData = newsImages.map((imgItem) => {
    // Map ID to corresponding text key
    // Provided JSON keys are "1", "2", "3", "4" matching IDs
    const textData = data.newsSection.items[imgItem.id.toString() as keyof typeof data.newsSection.items];
    
    return {
      id: imgItem.id,
      image: imgItem.image,
      title: textData?.title || "",
      date: textData?.date || ""
    };
  });

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

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === combinedData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? combinedData.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-[#F9F9F9] py-16 font-['Questrial',sans-serif]">
      {/* Max Width Container - 1830px max (aligned to match layout) */}
      <div className="max-w-330 mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[#303030] text-[40px] md:text-[46px] font-bold leading-tight tracking-tight">
            {data.newsSection.title}
          </h2>
          <div className="flex gap-3">
            {/* Previous Button */}
            <button 
              onClick={prevSlide}
              className="w-12 h-12 border border-[#EBEBEB] bg-white rounded-full flex justify-center items-center hover:bg-gray-50 transition-all shadow-sm"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            {/* Next Button */}
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-[#00A6F2] rounded-full flex justify-center items-center hover:bg-[#0095da] transition-all shadow-md"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden -mx-4 px-4 py-4">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)` 
            }}
          >
            {combinedData.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                ref={index === 0 ? cardRef : null}
                className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <div className="bg-white rounded-[20px] overflow-hidden h-100 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col">
                  {/* Image Container */}
                  <div className="h-50 w-full overflow-hidden relative">
                     <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[#868686] text-[14px]">
                        {item.date}
                      </span>
                      <h3 className="text-[#303030] text-[22px] font-bold leading-[1.2] mt-3 mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center text-[#00A6F2] text-[14px] font-bold mt-auto group/link">
                      <span className="mr-2">{data.newsSection.readMore}</span>
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="transition-transform group-hover/link:translate-x-1"
                      >
                         <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsSection;
