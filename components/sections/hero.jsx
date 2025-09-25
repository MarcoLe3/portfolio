import React from 'react';
import Image from 'next/image'

function Hero() {
  return (
     <div className="
        w-full 
        min-h-[70vh]
        flex justify-center px-4 
        text-[#0D1B2A]  text-black bg-white items-center
      ">
      <div className="flex flex-col gap-1 items-center text-center max-w-[90vw] sm:max-w-[80vw] md:max-w-[900px]">
        <Image
          src="/image/me.png"
          width={500}
          height={600}
          loading='lazy'
        />
        <h1 className="text-[10vw] sm:text-[10vw] md:text-[10vw] lg:text-[6.5vw] leading-none opacity-0 animate-fade-in font-semibold tracking-tighter">
          MARCO LEE
        </h1>

        {/* Tagline */}
        <p className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.6vw] leading-none opacity-0 animate-fade-in-delay">
          FRONTEND DEVELOPER PORTFOLIO  
        </p>

        {/* Description */}
        <p className="text-[4.5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.6vw] leading-snug text-black opacity-0 animate-fade-in-delay font-instrument">
          Based in San Francisco. Driven by a passion for building refined,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
            intuitive
          </span>{" "}
          experiences.
        </p>
      </div>
    </div>



  );
}

export default Hero;
