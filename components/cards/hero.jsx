import React from 'react';

function Hero() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 text-[#0D1B2A] animate-image-reveal">
      <div className="flex flex-col items-center text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-[900px]">
        {/* Name */}
        <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] leading-none opacity-0 animate-fade-in font-medium">
          MARCO LEE
        </h1>

        {/* Tagline */}
        <p className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.6vw] leading-none -mt-1 mb-6 opacity-0 animate-fade-in-delay font-medium">
          FRONTEND DEVELOPER PORTFOLIO
        </p>

        {/* Description */}
        <p className="text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] leading-snug -mt-2 text-gray-500 opacity-0 animate-fade-in-delay font-medium">
          Based in San Francisco. Driven by a passion for building refined, intuitive UI/UX experiences.
        </p>
      </div>
    </div>
  );
}

export default Hero;
