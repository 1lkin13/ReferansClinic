import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NotFound: React.FC = () => {
  const { data } = useLanguage();
  const { notFound } = data;

  return (
    <div className="grow flex flex-col items-center justify-center py-20 px-4 bg-gray-50 min-h-[60vh]">
      <div className="text-center max-w-lg">
        <h1 className="text-[120px] md:text-[180px] font-bold text-[#00A6F2] leading-none select-none font-['AvantGarde_Bk_BT',sans-serif]">
          {notFound.title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-[#303030] mt-4 mb-4 font-['Questrial',sans-serif]">
          {notFound.subtitle}
        </h2>
        <p className="text-gray-600 text-lg mb-10 font-['Questrial',sans-serif]">
          {notFound.message}
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center bg-[#00A6F2] text-white font-bold py-4 px-10 rounded-full hover:bg-[#0095da] transition-all duration-300 shadow-lg hover:shadow-xl font-['Questrial',sans-serif]"
        >
          {notFound.button}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
