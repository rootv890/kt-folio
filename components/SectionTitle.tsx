"use client";
import TypeShuffle from "@/lib/typeshuffle";
import React from "react";

interface SectionTitleProps {
  title: string;
  id?: string;
}

const SectionTitle = ({ title, id }: SectionTitleProps) => {
  return (
    <h2
      id={id && id}
      className=" w-full select-none font-mono text-[16px] text-zinc-700 uppercase mt-10 mb-4"
    >
      <TypeShuffle triggerOnce={false} effect="fx1">
        {title}
      </TypeShuffle>
    </h2>
  );
};

export default SectionTitle;
