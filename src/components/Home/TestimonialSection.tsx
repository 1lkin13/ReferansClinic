import React from 'react';
import userImage from '../../assets/WhyUs/userimage.jpg';
import { useLanguage } from '../../context/LanguageContext';

const TestimonialSection: React.FC = () => {
  const { data } = useLanguage();

  return (
    <div className="bg-white pb-20 pt-10 font-['Questrial',sans-serif]">
      <div className="max-w-330 mx-auto px-4 lg:px-8">
        
        {/* Title */}
        <h2 className="text-[#3F3F3F] text-[40px] md:text-[45.9px] font-bold leading-[1.2] tracking-[-0.03em] mb-12">
          {data.testimonialSection.title}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.testimonialSection.reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-[#FAFAFA] rounded-2xl p-8 flex flex-col relative group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header: User Image Left, Quote Icon Right */}
              <div className="flex justify-between items-start mb-4">
               <img 
  src={userImage} 
  alt={review.name} 
  className="w-16 h-16 rounded-full object-cover object-center border-2 border-[#EBEBEB]"
/>
                
                <div className="w-10 h-10 bg-[#00A6F2] rounded-lg flex justify-center items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-[#3F3F3F] text-[22px] font-normal tracking-[-0.02em] mb-1">
                {review.name}
              </h3>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#00A6F2">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#3F3F3F] text-[15px] leading-relaxed opacity-80">
                {review.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TestimonialSection;
