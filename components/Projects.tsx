import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import ComingSoonProjectCard from "./SoonProjectCard";

const Projects = () => {
  return (
    <div className="max-sm:px-4  flex flex-col justify-start  w-full">
      <SectionTitle title="Projects" />

      <ul className="grid grid-cols-1 gap-2  justify-stretch md:grid-cols-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <div className="flex h-full gap-2 flex-col">
          <ComingSoonProjectCard />
          <ComingSoonProjectCard />
        </div>
      </ul>
    </div>
  );
};

export default Projects;
