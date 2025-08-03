import React, { useEffect, useRef, useState } from 'react';
import ExperienceDescription from './experienceDescription';
import ProjectDescription from './projectDescription';

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
    <div className="w-full flex flex-col items-center bg-white font-light px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      <div className="w-full max-w-[1440px] flex flex-col">
        <div
          ref={ref}
          className={`w-full transition-opacity duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* PROJECTS SECTION */}
          <h1 className="text-[36px] sm:text-[42px] md:text-[50px] font-medium mb-10 text-left">
            Projects
          </h1>
          <div className="flex flex-row md:flex-row gap-6 md:gap-8 items-center md:items-stretch mb-16">
            <ProjectDescription
              title="Portfolio"
              tagline="Showcase"
              imageUrl="/image/port.png"
              link="/Portfolio"
            />
            <ProjectDescription
              title="Cache Manager"
              tagline="Data Management"
              imageUrl="/image/cac.png"
              link="/CacheManager"
            />
          </div>

          {/* EXPERIENCE SECTION */}
          <h1 className="text-[36px] sm:text-[42px] md:text-[50px] font-medium mb-10 text-left">
            Experience
          </h1>
          <div className="flex flex-col gap-6 sm:gap-6 md:gap-8">
            <ExperienceDescription
              company="Cal Poly Digital Transformation Hub, AWS"
              role="AI Student"
              endDate="'25"
              description="Making AI accessible to all"
              gradientStart="#1A4D2E"
              gradientMid="#14532D"
              gradientEnd="#212529"
              image="/image/AIcamp.png"
              link="/Contact_Page"
            />
            <ExperienceDescription
              company="Eazifunds"
              role="Frontend Developer Intern"
              endDate="'25"
              description="Setting a future for all people"
              gradientStart="#274c77"
              gradientMid="#001d3d"
              gradientEnd="#212529"
              image="/image/e.png"
              link="/Contact_Page"
            />
            <ExperienceDescription
              company="Popper"
              role="Frontend Developer Intern"
              endDate="'24"
              description="Socalizing with rewards"
              gradientStart="#6B5FA5"
              gradientMid="#5e548e"
              gradientEnd="#212529"
              image="/image/p.png"
              link="/Contact_Page"
            />
            <ExperienceDescription
              company="SF Living Wages Coalition"
              role="Frontend Intern"
              endDate="'24"
              description="Helping to end poverty in SF"
              gradientStart="#e5383b"
              gradientMid="#660708"
              gradientEnd="#212529"
              image="/image/sf.png"
              link="/Contact_Page"
            />
            <ExperienceDescription
              company="City College of San Francisco"
              role="Computer Science Tutor Assistant"
              endDate="'24"
              description="Tutoring beginning students in CS"
              gradientStart="#c1121f"
              gradientMid="#d62828"
              gradientEnd="#212529"
              image="/image/s.png"
              link="/Contact_Page"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
