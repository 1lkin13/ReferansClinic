import React from "react";
import { useLanguage } from "../../context/LanguageContext.tsx";
import layer1 from "../../assets/layer-1-icon.svg";
import layer2 from "../../assets/layer-2-icon.svg";
import layer3 from "../../assets/layer-3-icon.svg";

const icons = [layer1, layer2, layer3];

const InfoSection: React.FC = () => {
  const { data } = useLanguage();
  const { infoSection } = data;

  return (
    <div className="w-full flex justify-center py-8 md:py-10">
      <div className="w-full max-w-300 flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-8 md:gap-10 px-6 md:px-4 xl:px-0">
        {infoSection.map((item: any, index: number) => (
          <div
            key={item.id}
            className="flex items-center gap-5 md:gap-6 w-full md:w-auto md:min-w-75"
          >
            {/* Icon Container */}
            <div className="shrink-0 text-[#0095DA] w-14 md:w-auto">
              <img
                src={icons[index]}
                alt={item.title}
                className="w-full h-full object-contain"
                style={{ maxHeight: "68px" }}
              />
            </div>

            {/* Text Container */}
            <div className="flex flex-col gap-1">
              <h3 className="text-[#3F3F3F] font-bold text-[17px] md:text-[19.54px] font-['Avant_Garde',sans-serif] leading-tight">
                {item.title}
              </h3>
              <p className="text-[#434343] font-normal text-[15px] md:text-[16.48px] font-['Avant_Garde',sans-serif] leading-tight">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
