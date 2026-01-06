import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { aboutDoctors } from "../../DB/mockData/aboutDoctor";
import Empty from "../About/Empty";
import tecrubeIcon from "../../assets/DoctorDetail/tecrube icon.svg";
import potensialIcon from "../../assets/DoctorDetail/potensial icon.svg";
import starIcon from "../../assets/DoctorDetail/Star icon.svg";
import EmptyDoctor from "./EmptyDoctor";

const DoctorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useLanguage();
  const [activeTab, setActiveTab] = useState<"info" | "articles" | "reviews">(
    "info"
  );

  const baseDoctor = aboutDoctors.find((doc) => doc.id.toString() === id);
  // @ts-ignore
  const labels = data.aboutPage?.detailsLabels;
  // @ts-ignore
  const specificDetails = data.aboutPage?.doctorDetails?.[id || ""];
  // @ts-ignore
  const defaultDetails = data.aboutPage?.doctorDetails?.["1"];
  const details = specificDetails || defaultDetails;
  // @ts-ignore
  const basicLoc = data.aboutPage?.doctors?.[id || ""];

  if (!baseDoctor) return <EmptyDoctor />;

  return (
    <div className="max-w-360 mx-auto px-4 md:px-8 py-8 font-['Questrial',sans-serif]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-9 mb-8 md:mb-12 items-start">
        <div className="w-full md:w-[381.95px] shrink-0 h-[380] max-w-sm mx-auto md:mx-0">
          <div className="bg-[#F9F9F9] rounded-[21.13px] overflow-hidden relative h-full w-full">
            <img
              src={baseDoctor.image}
              alt={basicLoc?.name || baseDoctor.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-col pt-0 md:pt-5 md:mt-2 gap-6 md:gap-15 w-full">
          <div className="max-w-[742.54px]">
            <h1 className="text-[#0095DA] font-bold text-[28px] md:text-[42px] leading-tight md:leading-12 mb-2">
              {basicLoc?.name || baseDoctor.name}
            </h1>
            <p className="text-[#303030] text-[16px] md:text-[22px] mb-4 md:mb-8 font-['Questrial',sans-serif]">
              {basicLoc?.specialty || baseDoctor.specialty}
            </p>
          </div>

          <div className="border-2 md:border-[2.44px] mt-0 md:mt-5 border-[#D4D4D4] rounded-xl md:rounded-[21.13px] h-auto md:h-37.5 flex flex-col md:flex-row items-center justify-evenly bg-white w-full md:w-180 py-4 md:py-0 gap-4 md:gap-0">
            <div className="flex flex-col items-center justify-center gap-1 w-full md:w-auto">
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={tecrubeIcon}
                  alt="Experience"
                  className="w-6 h-6 md:w-10 md:h-10 object-contain"
                />
                <span className="font-['Avant_Garde',sans-serif] font-bold text-[28px] md:text-[48px] text-[#505050] leading-none tracking-[0.05em]">
                  {details?.experience || "0 il"}
                </span>
              </div>
              <div className="text-[#808080] text-[14px] md:text-[18px] font-['Questrial',sans-serif]">
                {labels?.experience || "Təcrübə"}
              </div>
            </div>

            <div className="hidden md:block w-[2.44px] h-30 bg-[#D4D4D4]"></div>
            <div className="block md:hidden w-full h-0.5 bg-[#D4D4D4]"></div>

            <div className="flex flex-col items-center justify-center gap-1 w-full md:w-auto">
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={potensialIcon}
                  alt="Patients"
                  className="w-6 h-6 md:w-10 md:h-10 object-contain"
                />
                <span className="font-['Avant_Garde',sans-serif] font-bold text-[28px] md:text-[48px] text-[#505050] leading-none tracking-[0.05em]">
                  {details?.patientCount || "0"}
                </span>
              </div>
              <div className="text-[#808080] text-[14px] md:text-[18px] font-['Questrial',sans-serif]">
                {labels?.patients || "Pasiyent sayı"}
              </div>
            </div>

            <div className="hidden md:block w-[2.44px] h-30 bg-[#D4D4D4]"></div>
            <div className="block md:hidden w-full h-0.5 bg-[#D4D4D4]"></div>

            <div className="flex flex-col items-center justify-center gap-1 w-full md:w-auto">
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  src={starIcon}
                  alt="Reviews"
                  className="w-6 h-6 md:w-10 md:h-10 object-contain"
                />
                <span className="font-['Avant_Garde',sans-serif] font-bold text-[28px] md:text-[48px] text-[#505050] leading-none tracking-[0.05em]">
                  {details?.reviewsCount || "0"}
                </span>
              </div>
              <div className="text-[#808080] text-[14px] md:text-[18px] font-['Questrial',sans-serif]">
                {labels?.reviews || "Rəylər"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 md:gap-16 border-b-4 border-[#EBEBEB] mb-6 md:mb-8 justify-center overflow-x-auto">
        {[
          { id: "info", label: labels?.tabs?.info || "Məlumat" },
          {
            id: "articles",
            label: labels?.tabs?.articles || "Həkimin məqalələri",
          },
          { id: "reviews", label: labels?.tabs?.reviews || "Rəylər" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`pb-2 md:pb-4 transition-colors relative text-center font-['Questrial',sans-serif] font-bold whitespace-nowrap ${
              activeTab === tab.id
                ? "border-b-[5px] border-[#0095DA] text-[#303030] "
                : "border-transparent text-[#9E9E9E] hover:text-[#0095DA]"
            }`}
            style={{
              fontSize: window.innerWidth < 768 ? "14px" : "26px",
              lineHeight: "98%",
              letterSpacing: "0.01em",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-75">
        {activeTab === "info" && details ? (
          <div className="flex flex-col text-[#303030]">
            {/* Position - with green background */}
            {details.position && (
              <div
                className="flex flex-col md:flex-row gap-4 py-5 px-4 rounded-sm"
                style={{ background: "rgba(107, 181, 43, 0.06)" }}
              >
                <div className="w-60 shrink-0 font-bold text-[18px] text-[#303030]">
                  {labels?.fields?.position}
                </div>
                <div className="flex-1 text-[18px] text-[#505050]">
                  {details.position}
                </div>
              </div>
            )}
            {/* Center */}
            {details.center && (
              <div className="flex flex-col md:flex-row gap-4 py-5 px-4">
                <div className="w-60 shrink-0 font-bold text-[18px] text-[#303030]">
                  {labels?.fields?.center}
                </div>
                <div className="flex-1 text-[18px] text-[#505050]">
                  {details.center}
                </div>
              </div>
            )}
            {/* Education - with green background */}
            {details.education && (
              <div
                className="flex flex-col md:flex-row gap-4 py-6 px-4 rounded-sm"
                style={{ background: "rgba(107, 181, 43, 0.06)" }}
              >
                <div className="w-60 shrink-0 font-bold text-[18px] text-[#303030]">
                  {labels?.fields?.education}
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  {details.education.map((edu: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-[#0095DA] mt-1.5 min-w-4 h-4 bg-[#0095DA] rounded-full flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">
                          ✓
                        </span>
                      </span>
                      <span className="text-[18px] text-[#505050]">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Treatments */}
            {details.treatments && (
              <div className="flex flex-col md:flex-row gap-4 py-6 px-4">
                <div className="w-60 shrink-0 font-bold text-[18px] text-[#303030]">
                  {labels?.fields?.treatments}
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  {details.treatments.map((t: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-[#0095DA] mt-1 shrink-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle cx="12" cy="12" r="12" fill="#0095DA" />
                          <path
                            d="M8 12L11 15L16 9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-[18px] text-[#505050]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default DoctorDetail;
