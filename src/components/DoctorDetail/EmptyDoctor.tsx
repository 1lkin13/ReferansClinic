import React from "react";

const EmptyDoctor: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 font-['Questrial',sans-serif]">
            Həkim Tapılmadı
          </h2>
          <p className="text-gray-600 mb-6 font-['Questrial',sans-serif]">
            Axtardığınız həkim mövcud deyil və ya silinib.
          </p>
          <a
            href="/about"
            className="inline-block bg-[#0095DA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0077b3] transition-colors font-['Questrial',sans-serif]"
          >
            Həkimlər Siyahısına Qayıt
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmptyDoctor;
