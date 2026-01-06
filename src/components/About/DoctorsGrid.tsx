import React, { useState } from "react";
import { aboutDoctors } from "../../DB/mockData/aboutDoctor";
import searchIcon from "../../assets/Nav/search-icon.svg";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const DoctorsGrid: React.FC = () => {
  const { data } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredDoctors = aboutDoctors.filter((doctor) => {
    // @ts-ignore
    const locData = data.aboutPage?.doctors?.[doctor.id.toString()];
    const name = locData?.name || doctor.name;
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="w-full">
      {/* Search Bar - matching design */}
      <div className="mb-12 relative w-full lg:w-121">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={
            data.aboutPage?.searchPlaceholder || "Həkimin Adı, Soyadı"
          }
          className="w-full h-[58.5px] pl-6 pr-12 rounded-[13.62px] border-[0.9px] border-[#BDBEC1] text-[#808080] placeholder-[#808080] focus:outline-none focus:border-[#0095DA] transition-colors font-['Questrial',sans-serif] bg-[#F7FAFF]"
        />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer">
          <img src={searchIcon} alt="Search" className="w-5 h-5 opacity-40" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
        {filteredDoctors.map((doctor) => {
          // @ts-ignore
          const locData = data.aboutPage?.doctors?.[doctor.id.toString()];

          return (
            <div
              key={doctor.id}
              onClick={() => navigate(`/doctors/${doctor.id}`)}
              className="bg-[#F9F9F9] overflow-hidden flex flex-col hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 group border border-transparent hover:border-[#F0F0F0] mx-auto cursor-pointer"
              style={{
                width: "360px",
                height: "465px",
                borderRadius: "21.53px",
              }}
            >
              {/* Image Container */}
              <div
                className="w-full bg-[#F9F9F9] overflow-hidden relative shrink-0"
                style={{ height: "330px" }}
              >
                <img
                  src={doctor.image}
                  alt={locData?.name || doctor.name}
                  className="w-full h-full object-cover object-top"
                  style={{ borderBottomRightRadius: "100px" }}
                />
              </div>

              {/* Text Container */}
              <div className="flex-1 flex flex-col justify-center items-start px-6 py-4">
                <h3 className="text-[#303030]  tracking-wide font-bold text-[29.21px] leading-[37.55px]  mb-2 text-left font-['Questrial',sans-serif]">
                  {locData?.name || doctor.name}
                </h3>
                <p className="text-[#303030] font-normal text-[17.94px] leading-[19.73px] tracking-[0] opacity-70 text-left font-['Questrial',sans-serif]">
                  {locData?.specialty || doctor.specialty}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsGrid;
