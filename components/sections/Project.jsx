import React from 'react';
import ProjectDescription from '../cards/projectDescription';

const Projects = () => {
  return (
    <section className="w-full h-full py-12 bg-gradient-to-b from-gray-300 to-white flex flex-col gap-3">
      <h1 className="text-[60px] font-medium text-center animate-fade-in bg-gradient-to-b from-[#38434F] to-[#788C9C] text-transparent bg-clip-text">
        Projects
      </h1>
      {/* <p className="text-[24px] font-semibold text-gray-500 text-center animate-fade-in">
        Creative + Talent
      </p> */}

      <div className="flex flex-col gap-2">
        <div className="flex justify-center gap-2">
          <ProjectDescription
            title="Portfolio"
            tagline="Showcase"
            bgColor="white"
            taglineColor="gray-500"
            titleColor="black"
            imageUrl="/image/portfolio.png"
            link="/Portfolio"
          />
          <ProjectDescription
            title="Weather AI"
            bgColor="white"
            tagline="Showcase"
            taglineColor="white"
            titleColor="white"
            link="/Portfolio"
          />
        </div>
        <div className="flex justify-center gap-2">
          <ProjectDescription
            title="Portfolio"
            tagline="Showcase"
            bgColor="white"
            taglineColor="white"
            titleColor="white"
            imageUrl="/image/portfolio.png"
            link="/Portfolio"
          />
          <ProjectDescription
            title="ManageHealthcare"
            bgColor="white"
            tagline="Showcase"
            imageUrl="/image/portfolio.png"
            link="/Portfolio"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;