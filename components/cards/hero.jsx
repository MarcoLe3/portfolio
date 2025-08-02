import React from 'react';

function Hero() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-[#0D1B2A] animate-image-reveal px-4">
      {/* Name */}
      <h1 className="text-[62px] sm:text-[60px] md:text-[90px] lg:text-[100px] leading-none opacity-0 animate-fade-in font-medium text-center">
        MARCO LEE
      </h1>

      {/* Tagline */}
      <p className="text-[20px] sm:text-[19px] md:text-[29px] lg:text-[32px] leading-none -mt-1 mb-10 opacity-0 animate-fade-in-delay font-medium text-center">
        FRONTEND DEVELOPER PORTFOLIO
      </p>

      {/* Description */}
      <p className="text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading-snug -mt-2 mb-16 opacity-0 animate-fade-in-delay font-medium text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-[900px]">
        Based in San Francisco. Driven by a passion for building refined, intuitive UI/UX experiences.
      </p>

      {/* Downward Arrow (Optional) */}
      {/* <div className="mt-6 opacity-0 animate-fade-in-delay-long transform rotate-90">
        <img
          src="/image/down.png"
          alt="Down Arrow"
          className="w-auto h-auto cursor-pointer transition-transform duration-500 hover:translate-y-4"
        />
      </div> */}
    </div>
  );
}

export default Hero;
