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
      <div className="rounded-2xl p-2 mb-14 relative group overflow-visible cursor-pointer hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        {/* Outer container with black border and white outline */}
        <div
          className="
            relative
            w-[90vw] h-[50vh]
            sm:w-[70vw] sm:h-[40vh]
            md:w-[80vw] md:h-[40vh]
            lg:w-[50vw] lg:h-[50vh]
            w-[90vw] sm:w-[90vw] md:w-[60vw] lg:w-[60vw]
            aspect-[3/2] max-h-[600px] sm:max-h-[650px] md:max-h-[700px] lg:max-h-[750px]
            rounded-[16px]
            border-[10px] border-[#000000]
            shadow-2xl
            overflow-hidden
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
              background: `linear-gradient(${gradientStart} 0%, ${gradientMid} 50%, ${gradientEnd} 100%)`,
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 md:p-10 w-full h-full font-Rubik">
            <img
              src="/image/arrow.png"
              alt="Arrow"
              className="absolute top-4 right-8 sm:right-12 md:right-16 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 transform transition-all duration-300 ease-in-out group-hover:translate-x-7 z-50"
            />

            <h2 className="text-2xl sm:text-3xl font-medium mb-2 text-white">{company}</h2>
            <p className="text-gray-300 text-base sm:text-lg font-medium">
              <span className="font-medium text-white">
                {role}, {endDate}
              </span>{' '}
              — {description}
            </p>
          </div>

          {/* Floating image */}
          <img
            src={image}
            alt="iPad Design"
            className="
              absolute left-1/2
              w-[60vw] sm:w-[70vw] md:w-[50vw]
              h-[30vh] sm:h-[20vh] md:h-[20vh]
              lg:w-[60vw] lg:h-[30vh]
              w-[70%] max-w-[900px] h-auto
              z-6 transform -translate-x-1/2
              bottom-[-6%] sm:bottom-[-5%]
              object-contain
              transition-all duration-500 ease-in-out
              group-hover:bottom-[-2%] group-hover:scale-102
          "
          />
        </div>
      </div>
    </Link>
  );
}

export default ExperienceDescription;
