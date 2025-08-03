import React, { useEffect, useRef, useState } from 'react';
import ExperienceDescription from './experienceDescription';
import ProjectDescription from './projectDescription';
import Image from 'next/image';

const Experience = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const scrollProjects = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const updateScrollButtons = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // Use -1 to avoid rounding errors
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons(); // Initial check
    }

    return () => {
      if (el) el.removeEventListener('scroll', updateScrollButtons);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 font-light px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      <div className="w-full max-w-[1440px] flex flex-col" style={{ marginLeft: '15vw' }}>
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

          <div className="relative mb-16">
            {/* Left Arrow Button */}
            <button
              onClick={() => scrollProjects('left')}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300/90 hover:bg-gray-400 transition-all duration-500 ease-in-out rounded-full shadow-md flex items-center justify-center ${
                canScrollLeft ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
              style={{ width: 80, height: 80, left: -100 }}
            >
              <Image
                src="/image/test3.png"
                alt="Scroll Left"
                width={100}
                height={50}
              />
            </button>

            {/* Scrollable Projects */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto no-scrollbar gap-6 md:gap-8 items-stretch scroll-smooth pr-4 w-full max-w-full md:max-w-[1140px]"
            >
              <ProjectDescription
                title="AI Auditor"
                tagline="AI Assistant"
                imageUrl="/image/cac.png"
                link="/CacheManager"
              />
              <ProjectDescription
                title="AI Chatbot"
                tagline="AI Assistant"
                imageUrl="/image/cac.png"
                link="/CacheManager"
              />
              <ProjectDescription
                title="Portfolio"
                tagline="Showcase"
                imageUrl="/image/port.png"
                link="/Portfolio"
              />
              <ProjectDescription
                title="Cache Manager"
                tagline="Data Management"
                imageUrl="/image/data.png"
                link="/CacheManager"
              />
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={() => scrollProjects('right')}
              className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-gray-300/90 hover:bg-gray-400 transition-all duration-500 ease-in-out rounded-full shadow-md flex items-center justify-center ${
                canScrollRight ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
              style={{ width: 80, height: 80, right: 200 }}
            >
              <Image
                src="/image/test2.png"
                alt="Scroll Right"
                width={100}
                height={50}
                className="rounded-full"
              />
            </button>
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
