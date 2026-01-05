import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Empty: React.FC = () => {
  const { data } = useLanguage();
  return (
    <div className="w-full h-80 flex items-center justify-center">
      <h2 className="text-[#303030] text-2xl font-['Avant_Garde',sans-serif] opacity-60">
        {data.aboutPage?.emptyText || "Buranın dizaynı yoxdur"}
      </h2>
    </div>
  );
};

export default Empty;
