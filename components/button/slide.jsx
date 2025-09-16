import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectDescription from "../cards/projectDescription";
import projects from "../../json/project.json";

export default function SlideShow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (current + 1) % projects.length;
      setCurrent(nextIndex);
    }, 5000);

    return () => clearTimeout(timer);
  }, [current, projects.length]);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <motion.div
        className="flex gap-6"
        animate={{
          x: `-${current * (80 * 1.25)}vw`,
        }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 35,
          mass: 0.8,
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            animate={{
              opacity: index === current ? 1 : 0.7,
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <ProjectDescription {...project} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to project ${index + 1}`}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}