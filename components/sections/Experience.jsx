import React, { useEffect, useRef, useState } from 'react';
import ExperienceDescription from '../cards/experienceDescription';
import ExperienceSlide from '../cards/experienceSlide';

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
    <div className="w-full flex flex-col items-center font-light">
      <div
        ref={ref}
        className={`w-full transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >

        {/* EXPERIENCE SECTION */}
        <section className="w-full bg-gray-100 py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            <h1 className="text-[32px] sm:text-[42px] md:text-[50px] font-medium mb-10 text-center">
              Experience
            </h1>

            <div className="flex flex-col gap-6 sm:gap-4 md:gap-2">
              {/* <ExperienceDescription
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
                role="Frontend Developer Intern"
                endDate="'25"
                description="Setting a future for all people"
                gradientStart="#274c77"
                gradientMid="#001d3d"
                gradientEnd="#212529"
                image="/image/eAI.png"
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
                image="/image/pop.png"
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
                image="/image/sf.png"
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
                image="/image/ccsf.png"
                link="/Contact_Page"
              /> */}
              <ExperienceSlide
                image="/image/pop.png"              
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Experience;
