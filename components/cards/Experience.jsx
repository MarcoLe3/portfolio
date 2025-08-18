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
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
    }

    return () => {
      if (el) el.removeEventListener('scroll', updateScrollButtons);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 font-light px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      <div className="w-full max-w-[1440px] flex flex-col ml-0 md:ml-[9vw]">
        <div
          ref={ref}
          className={`w-full transition-opacity duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* PROJECTS SECTION */}
          <h1 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium mb-8 text-left">
            Projects
          </h1>

          <div className="relative mb-16">
            {/* Left Arrow Button */}
            <button
              onClick={() => scrollProjects('left')}
              className={`hidden sm:flex absolute left-2 sm:-left-10 top-1/2 -translate-y-1/2 z-10 bg-gray-300/90 hover:bg-gray-400 transition-all duration-500 ease-in-out rounded-full shadow-md items-center justify-center ${
                canScrollLeft
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
              style={{ width: 60, height: 60 }}
            >
              <Image
                src="/image/test3.png"
                alt="Scroll Left"
                width={40}
                height={40}
              />
            </button>

            {/* Scrollable Projects */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto no-scrollbar gap-4 md:gap-6 items-stretch scroll-smooth w-full"
              style={{ paddingTop: '20px', paddingBottom: '20px' }}
            >
              <ProjectDescription
                className="flex-shrink-0"
                title="Portfolio"
                tagline="Showcase"
                imageUrl="/image/portfolio.png"
                link="/Portfolio"
              />
              {/* <ProjectDescription
                className="flex-shrink-0"
                title="Cache Manager"
                tagline="Data Management"
                imageUrl="/image/cac.png"
                link="/CacheManager"
              /> */}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={() => scrollProjects('right')}
              className={`hidden sm:flex absolute right-2 sm:right-10 top-1/2 -translate-y-1/2 z-10 bg-gray-300/90 hover:bg-gray-400 transition-all duration-500 ease-in-out rounded-full shadow-md items-center justify-center ${
                canScrollRight
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
              style={{ width: 60, height: 60 }}
            >
              <Image
                src="/image/test2.png"
                alt="Scroll Right"
                width={40}
                height={40}
                className="rounded-full"
              />
            </button>
          </div>

          {/* EXPERIENCE SECTION */}
          <h1 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium mb-10 text-left">
            Experience
          </h1>
          <div className="flex flex-col gap-6 sm:gap-4 md:gap-2">
            <ExperienceDescription
              company="Cal Poly Digital Transformation Hub, AWS"
              role="AI Student"
              endDate="'25"
              description="Making AI accessible to all"
              gradientStart="#008932"
              gradientMid="#14532D"
              gradientEnd="#212529"
              image="/image/aws.png"
              link="/Contact_Page"
            />
            <ExperienceDescription
              company="eAI"
              role="Frontend Developer Intern"s
              endDate="'25"
              description="Setting a future for all people"
              gradientStart="#274c77"
              gradientMid="#001d3d"
              gradientEnd="#212529"
              image = "/image/eAI.png"
              link="/Contact_Page"
            />
            <ExperienceDescription
              company="Popper"
              role="Frontend Developer Intern"
              endDate="'24"
              description="Socializing with rewards"
              gradientStart="#23223A"
              gradientMid="#23223A"
              gradientEnd="#212529"
              image = "/image/pop.png"
              link="/Contact_Page"
            />
            <ExperienceDescription
              company="SF Living Wages Coalition"
              role="Frontend Intern"
              endDate="'24"
              description="Helping to end poverty in SF"
              gradientStart="#e9152e"
              gradientMid="#660708"
              gradientEnd="#212529"
              image = "/image/sf.png"
              link="/Contact_Page"
            />
            <ExperienceDescription
              company="City College of San Francisco"
              role="Computer Science Tutor Assistant"
              endDate="'24"
              description="Tutoring beginning students in CS"
              gradientStart="#c53235ff"
              gradientMid="#c02626ff"
              gradientEnd="#212529"
              image = "/image/ccsf.png"
              link="/Contact_Page"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
