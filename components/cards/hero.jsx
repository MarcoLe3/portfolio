import React from 'react';

function Hero() {
  return (
    <div className="w-full h-[80vh] font-cormorant font-light flex flex-col items-center justify-center text-[#0D1B2A] animate-image-reveal">
      {/* Name */}
      <h1 className="text-[90px] leading-none opacity-0 animate-fade-in">MARCO LEE</h1>

      {/* Tagline */}
      <p className="text-[33px] leading-none -mt-3 mb-20 opacity-0 animate-fade-in-delay">
        WEB DEVELOPMENT PORTFOLIO
      </p>

      {/* Downward Arrow */}
      <div
        className="mt-6 opacity-0 animate-fade-in-delay-long transform rotate-90"
      >
        <img
          src="/image/Downarrow.png"
          alt="Down Arrow"
          className="w-auto h-auto cursor-pointer transition-transform duration-500 hover:translate-y-4"
        />
      </div>
    </div>
  );
}

export default Hero;