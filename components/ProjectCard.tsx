import TypeShuffle from "@/lib/typeshuffle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  name: string;
  project_ready?: boolean;
  description: string;
  link?: string;
  image?: string;
}
const ProjectCard = ({
  name,
  description,
  project_ready,
  image,
  link,
}: ProjectCardProps) => {
  return (
    <li className="bg-background max-w-full  border  w-full p-3 dark:border-kt-gray-900 group hover:border-kt  group-hover:border-kt  rounded-lg flex  flex-col group ">
      {/* Image */}

      <Link href={"#"}>
        {/* href will lead to "/project/projectName" */}{" "}
        {project_ready ? (
          <div className="rounded-lg relative  border  dark:border-kt-gray-900  group-hover:border-kt group-hover:-translate-y-1  duration-300">
            {image ? (
              <Image
                src={image}
                alt={name}
                width={800}
                height={600}
                className="rounded-lg"
              />
            ) : (
              <Image
                src="/images/placeholder.png"
                alt={name}
                width={800}
                height={600}
                className="rounded-lg"
              />
            )}
            <ul className="flex gap-1 absolute top-1 right-1">
              {[
                { id: 1, name: "Cyb Sec" },
                { id: 2, name: "Hacking" },
                { id: 3, name: "Pentes" },
              ].map((tag) => (
                <span
                  className="rounded-md bg-black ease-linear transition-all  px-2  text-sm cursor-pointer  hover:text-kt border-kt-gray-500 py-px text-kt-gray-500"
                  key={tag.id}
                >
                  {tag.name}
                </span>
              ))}
            </ul>
          </div>
        ) : (
          <span className="rounded-md bg-kt ease-linear transition-all  px-2  text-sm cursor-pointer  hover:text-kt-gray-200 border-kt-gray-500 py-px text-kt-gray-500">
            Coming Soon
          </span>
        )}
        {/* Content */}
        <div className="font-mono   dark:text-kt-gray-200 mt-4 flex-1 text-sm">
          <h5 className="text-kt uppercase">
            <TypeShuffle triggerOnce triggerOnHover effect={"fx1"}>
              {name ? name : "Project Name"}
            </TypeShuffle>
          </h5>
          <p className="mt-1 text-balance">
            {description
              ? description
              : "Simple Description goes here takes some space! let's say about twoline max!"}
          </p>

          {/* Time */}
          {project_ready && (
            <p className="mt-3 text-kt-gray-200 dark:text-kt-gray-900">
              20K Views <span className="">•</span> 20 Mar 2024
            </p>
          )}
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
