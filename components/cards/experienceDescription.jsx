function ExperienceDescription({ company, role, endDate, description }) {
  return (
    <div className="rounded-2xl p-2 mb-14 relative group overflow-visible cursor-pointer">
      {/* Outer container with black border and white outline */}
      <div
        className="relative w-[60vw] h-[60vh] rounded-[16px] border-[16px] border-[#000000] shadow-md overflow-hidden"
        style={{
          outline: "1px solid #212529",
          outlineOffset: "-16px",
          borderRadius: "16px",
        }}
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#212529] transition-opacity duration-[1200ms] ease-in-out z-0 pointer-events-none"></div>

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-in-out z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top, #274c77 5%, #001d3d 80%, #212529 100%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 p-10 w-full h-full font-Rubik">
          <img
            src="/image/arrow.png"
            alt="Arrow"
            className="absolute top-4 right-16 w-8 h-8 transform transition-all duration-300 ease-in-out group-hover:translate-x-7 z-50"
          />

          <h2 className="text-3xl font-medium mb-2 text-white">{company}</h2>
          <p className="text-gray-300 text-lg font-medium">
            <span className="font-medium text-white">
              {role}, {endDate}
            </span>{" "}
            — {description}
          </p>
        </div>

        {/* Floating image */}
        <img
          src="/image/eazifunds.png"
          alt="iPad Design"
          className="absolute left-1/2 w-[35vw] z-10 transform -translate-x-1/2 bottom-[-10%] 
            transition-all duration-500 ease-in-out group-hover:bottom-[-8%] group-hover:scale-102"
        />
      </div>
    </div>
  );
}

export default ExperienceDescription;
