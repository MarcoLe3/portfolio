import React from "react";
import SlideShow from "../button/slide";
import projects from "../../json/project.json";
import ProjectDescription from "../cards/projectDescription";

const Projects = () => {
  return (
    <section className="w-full py-12 bg-white flex flex-col gap-3 h-[110vh]">
      <h1 className="text-[60px] font-medium text-center bg-gradient-to-b from-[#38434F] to-[#788C9C] text-transparent bg-clip-text">
        Projects
      </h1>

      <div className="flex flex-wrap gap-2">
        {projects.map((project) => (
          <ProjectDescription
            title={project.title}
            tagline={project.tagline}
            imageUrl={project.imageUrl}
            link={project.link}
            titleColor={project.titleColor}
            taglineColor={project.taglineColor}
            bgColor={project.bgColor}
            bgImageUrl={project.bgImageUrl}
            bgPos={project.bgPos}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
