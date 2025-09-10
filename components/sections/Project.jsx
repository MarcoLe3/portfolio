import React from 'react';
import ProjectDescription from '../cards/projectDescription';

const Projects = () => {
  return (
    <section className="w-full h-full py-12 bg-gradient-to-b from-gray-200 to-white flex flex-col gap-1">
      <h1 className="text-[50px] font-medium text-center animate-fade-in">
        Projects
      </h1>
      <p className="text-[28px] font-medium text-gray-500 text-center animate-fade-in">
        Creative + Talent
      </p>

      <div className="flex flex-col gap-3">
        <div className="flex justify-center gap-3">
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