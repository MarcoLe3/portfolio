import React from "react";
import SlideShow from "../button/slide";

const Projects = () => {
  return (
    <section className="w-full py-12 bg-white flex flex-col gap-3 h-[110vh]">
      <h1 className="text-[60px] font-medium text-center animate-fade-in bg-gradient-to-b from-[#38434F] to-[#788C9C] text-transparent bg-clip-text">
        Projects
      </h1>

      <div className="flex flex-col gap-2 items-center">
        <SlideShow />
      </div>
    </section>
  );
};

export default Projects;
