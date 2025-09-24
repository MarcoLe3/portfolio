import React from "react";
import SlideShow from "../button/slide";
import projects from "../../json/project.json";
import ProjectDescription from "../cards/projectDescription";
import { Profiler } from 'react';

const Projects = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-100 to-[white] flex flex-col gap-3 md:h-[60vh]">
      <h1 className="text-[60px] font-medium text-center bg-gradient-to-b from-[#38434F] to-[#788C9C] text-transparent bg-clip-text">
        Projects
      </h1>
    
      <div className="flex p-2 flex-wrap gap-2">
        {projects.map((project) => (
          <Profiler
            key={project.title}
            id={project.title}
            onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
              console.log(`Component: ${id}`);
              console.log(`Phase: ${phase}`);
              console.log(`Actual render time: ${actualDuration.toFixed(2)}ms`);
              console.log(`Base duration: ${baseDuration.toFixed(2)}ms`);
            }}
          >
            <ProjectDescription
              title={project.title}
              tagline={project.tagline}
              link={project.link}
              titleColor={project.titleColor}
              taglineColor={project.taglineColor}
              bgColor={project.bgColor}
              bgImageUrl={project.bgImageUrl}
              top_pic={project.top}
              width_pic={project.width}
              height_pic={project.height}
            />
          </Profiler>
        ))}
      </div>

    </section>
  );
};

export default Projects;
