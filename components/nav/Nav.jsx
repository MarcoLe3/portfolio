import { useEffect, useState } from "react";
import Link from 'next/link';

const navigationData = {
  main: [{ title: "Home", url: "/" }],
  Exprience: [
    { title: "Cal Poly Digital Transformation Hub, AWS", url: "/Contact_Page" },
    { title: "Eazifunds", url: "/Contact_Page" },
    { title: "Popper", url: "/Contact_Page" },
    { title: "SF Living Wages Coalition", url: "/Contact_Page" },
    { title: "City of San Francisco", url: "/Contact_Page" },
  ],
  contact: [
    { title: "Mail", url: "mailto:marcole32k3@gmail.com" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/marco-lee-1461a0254/" },
    { title: "Read.CV", action: "showCv" },
  ],
  credits: [
    {
      title: "Images Used",
      url: null,
    },
  ],
};

export default function ScrollSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAllowedWidth, setIsAllowedWidth] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsAllowedWidth(window.innerWidth >= 1500);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !showSidebar && isAllowedWidth) {
        setShowSidebar(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSidebar, isAllowedWidth]);

  const handleItemClick = (item) => {
    if (item.action === "showCv") {
      setShowCvModal(true);
      setIsLoading(true);
    } else if (item.url) {
      window.location.href = item.url;
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "cv-overlay") {
      setShowCvModal(false);
      setIsLoading(false);
    }
  };

  const renderSection = (label, items) => (
    <div className="mt-6">
      {label && (
        <h3
          className="text-lg font-normal uppercase tracking-wide text-gray-700 mb-3 border-b border-gray-300 pb-1 font-rubik"
          style={{ paddingLeft: "1rem" }}
        >
          {label}
        </h3>
      )}
      <ul className="list-none m-0 p-0">
        {items.map((item) => (
          <li key={item.title}>
            {item.url?.startsWith("/") || item.url?.startsWith("#") ? (
              <Link
                href={item.url}
                className="block w-full text-left rounded-[25px] px-4 py-2 mb-2 transition-all duration-300 font-rubik text-lg text-gray-800 
                  hover:bg-white/20 hover:backdrop-blur-md hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
              >
                {item.title}
              </Link>
            ) : (
              <button
                onClick={() => handleItemClick(item)}
                className="block w-full text-left rounded-[25px] px-4 py-2 mb-2 transition-colors duration-300 font-rubik text-lg text-gray-800 hover:shadow-lg"
              >
                {item.title}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {isAllowedWidth && (
        <aside
          className={`fixed top-10 right-8 h-full w-64 z-50 transition-all duration-700 ease-in-out 
            p-6 font-rubik
            ${showSidebar ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          {renderSection("Experience", navigationData.Exprience)}
          {renderSection("Contact", navigationData.contact)}
        </aside>
      )}

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
              className={`w-full h-full rounded-lg transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
              title="Marco's CV"
              style={{ border: "none", background: "transparent", pointerEvents: "auto", cursor: "default" }}
              onClick={(e) => e.stopPropagation()}
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <style jsx>{`
            .loader {
              border: 4px solid transparent;
              border-radius: 50%;
              width: 48px;
              height: 48px;
              animation: spin 1s ease-in-out infinite;
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
