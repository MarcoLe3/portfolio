import React, { useState } from 'react';

function Resume() {
  const [showCvModal, setShowCvModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResumeClick = () => {
    setShowCvModal(true);
    setIsLoading(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "cv-overlay") {
      setShowCvModal(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center cursor-pointer" onClick={handleResumeClick}>
        <img src="/image/file_text.png" alt="Resume Icon" className="w-10 h-10 mr-2" />
        <span className="text-[#0066CC] hover:underline text-2xl">Resume</span>
      </div>

      {showCvModal && (
        <div
          id="cv-overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-md"
          style={{ cursor: "pointer" }}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-50 rounded-lg">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
              </div>
            )}
            <iframe
              src="/image/8.11.2025.pdf"
              className={`w-full h-full rounded-lg transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              title="Marco's CV"
              style={{ border: "none", background: "transparent", pointerEvents: "auto", cursor: "default" }}
              onClick={(e) => e.stopPropagation()}
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <style jsx>{`
            .loader {
              border: 4px solid transparent;
              border-top: 4px solid #0066CC;
              border-radius: 50%;
              width: 48px;
              height: 48px;
              animation: spin 1s linear infinite;
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}

export default Resume;
