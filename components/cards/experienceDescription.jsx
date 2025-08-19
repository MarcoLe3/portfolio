import Link from 'next/link';

function ExperienceDescription({
  company,
  role,
  endDate,
  description,
  gradientStart,
  gradientMid,
  gradientEnd,
  image,
  link,
}) {
  return (
    <Link href={link}>
      <div className="rounded-2xl mb-4 relative overflow-visible cursor-pointer">
        {/* Inner card gets the group hover */}
        <div
          className="
            relative group
            w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] 
            h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px]
            rounded-[16px]
            border-[10px] border-[#000000]
            shadow-2xl
            overflow-hidden
            hover:scale-[1.01] transition-transform duration-300 ease-in-out
          "
          style={{
            outline: '1px solid #212529',
            outlineOffset: '-16px',
            borderRadius: '16px',
          }}
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-[#212529] transition-opacity duration-[1200ms] ease-in-out z-0 pointer-events-none"></div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-in-out z-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse at top center, rgba(255,255,255,0.2) 2%, transparent 80%),
                linear-gradient(${gradientStart} 0%, ${gradientMid} 50%, ${gradientEnd} 100%)
              `,
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 p-6 w-full h-full font-instrument">
            <img
              src="/image/arrow.png"
              alt="Arrow"
              className="absolute top-4 right-12 w-8 h-8 transform transition-all duration-300 ease-in-out group-hover:translate-x-7 z-50 hidden sm:block"
            />

            <h2 className="text-2xl font-medium mb-2 text-white">{company}</h2>
            <p className="text-gray-300 text-base font-medium">
              <span className="font-medium text-white">
                {role}, {endDate}
              </span>{' '}
              — {description}
            </p>
          </div>

          <img
            src={image}
            alt="iPad Design"
            className="
              absolute left-1/2
              w-[340px] h-[400px]       /* default mobile size */
              sm:w-[500px] sm:h-[400px] /* small screens */
              md:w-[650px] md:h-[500px] /* medium screens */
              lg:w-[800px] lg:h-[700px] /* large screens - bigger on browser */
              z-6 transform -translate-x-1/2
              bottom-[-100px] sm:bottom-[-120px]
              object-contain
              transition-all duration-500 ease-in-out
              group-hover:scale-105 group-hover:bottom-[-110px]
            "
          />
        </div>
      </div>
    </Link>
  );
}

export default ExperienceDescription;
