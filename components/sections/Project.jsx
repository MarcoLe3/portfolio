import React from 'react';
import ProjectDescription from '../cards/projectDescription';

const Projects = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-200 to-white flex flex-col gap-3 h-[110vh]">
      <h1 className="text-[60px] font-medium text-center animate-fade-in bg-gradient-to-b from-[#38434F] to-[#788C9C] text-transparent bg-clip-text">
        Projects
      </h1>

      <div className="flex flex-col gap-2 items-center">
          <ProjectDescription
            title="Portfolio"
            tagline="The ultimate way to understand my ideas. Learn more about what I create. Get to experience my history."
            taglineColor="gray"
            imageUrl="/image/portfolio.png"
            titleColor="black"
            link="/Portfolio"
          />
      </div>
    </section>
  );
};

export default Projects;