import React, { useEffect, useRef, useState } from 'react';
import ExperienceDescription from './experienceDescription';

const Experience = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="w-full h-screen flex font-light">
      {/* Left Section (Text) */}
      <div className="bg-white flex items-start justify-start p-20 w-full">
        <div className="flex flex-col w-full">
          {/* <h1
            ref={ref}
            className={`text-[60px] leading-none opacity-0 font-cormorant transition-opacity duration-700 ease-in-out ${
              isVisible ? 'animate-fade-in-fast opacity-100' : ''
            } text-[#0D1B2A]`}
          >
            My works. <span className="text-[#6c757d]">Designed for impact</span>
          </h1> */}

          {/* Centered and moved-down ExperienceDescription */}
          <div
            ref={ref}
            className={`flex flex-col justify-center mx-auto transition-opacity duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <ExperienceDescription
              company="Eazifunds"
              role="Frontend Developer Intern"
              endDate="'25"
              description="Setting a future for all people"
              gradientStart="#274c77"
              gradientMid="#001d3d"
              gradientEnd="#212529"
              image={"/image/e.png"}
            />
            <ExperienceDescription
              company="Popper"
              role="Frontend Developer Intern"
              endDate="'24"
              description="Socalizing with rewards"
              gradientStart="#6B5FA5"
              gradientMid="#5e548e"
              gradientEnd="#212529"
              image={"/image/p.png"}
            />
            <ExperienceDescription
              company="SF Living Wages Coalition"
              role="Frontend Intern"
              endDate="'24"
              description="Helping to end poverty in SF"
              gradientStart="#e5383b"
              gradientMid="#660708"
              gradientEnd="#212529"
              image={"/image/sf.png"}
            />
            <ExperienceDescription
              company="City College of San Francisco"
              role="Computer Science Tutor Assistant"
              endDate="'24"
              description="Tutoring beginning students in CS"
              gradientStart="#c1121f"
              gradientMid="#d62828"
              gradientEnd="#212529"
              image={"/image/s.png"}
            />
          </div>

        </div>
      </div>

      {/* Right Section (Optional Image or Media) */}
      {/* 
      <div
        className="w-1/2 bg-cover bg-center animate-image-reveal"
        style={{ backgroundImage: `url('/image/image.png')` }}
      ></div> 
      */}
    </div>
  );
};

export default Experience;




