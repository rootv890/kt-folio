import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import ComingSoonProjectCard from "./SoonProjectCard";

const Projects = () => {
  return (
    <div className="max-sm:px-4  flex flex-col justify-start  w-full">
      <SectionTitle title="Projects" />

      {process.env.NEXT_PUBLIC_PROJECT_READY !== "ready" ? (
        <div className="flex flex-col gap-2">
          <p className="text-[18px] text-kt-gray-500 dark:text-kt-gray-100 leading-relaxed">
            Projects are not ready yet, but here are my upcoming projects.
          </p>
          <ProjectCard
            name="Project Name"
            description="Some Descritpion for one or two line!!"
            image="/image-1.jpg"
          />
          <ProjectCard
            name="Project Name"
            description="Some Descritpion for one or two line!!"
            image="/image-1.jpg"
          />
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-2  justify-center md:grid-cols-2">
          <ProjectCard
            name="Project Name"
            description="Some Descritpion for one or two line!!"
            image="/image-1.jpg"
            project_ready
          />
          <ProjectCard
            name="Project Name"
            description="Some Descritpion for one or two line!!"
            image="/image-1.jpg"
            project_ready
          />
          <ProjectCard
            name="Project Name"
            description="Some Descritpion for one or two line!!"
            image="/image-1.jpg"
            project_ready
          />
          <ProjectCard
            name="Project Name"
            description="Some Descritpion for one or two line!!"
            image="/image-1.jpg"
          />
          <ProjectCard
            name="Project Name"
            description="Some Descritpion for one or two line!!"
            image="/image-1.jpg"
          />
        </ul>
      )}
    </div>
  );
};

export default Projects;
