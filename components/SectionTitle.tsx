import React from "react";

interface SectionTitleProps {
  title: string;
  id?: string;
}

const SectionTitle = ({ title, id }: SectionTitleProps) => {
  return (
    <h2
      id={id && id}
      className=" w-full select-none font-mono text-[16px] text-kt-gray-900 uppercase mt-10 mb-4"
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
