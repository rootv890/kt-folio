"use client";
import TypeShuffle from "@/lib/typeshuffle";
import React from "react";
import { BsTerminalFill } from "react-icons/bs";
import { TiHeart } from "react-icons/ti";

const Footer = () => {
  const [effect] = React.useState("fx1");
  return (
    <div className="flex flex-col items-center justify-center gap-6  my-12">
      <BsTerminalFill size={24} className="text-kt-gray-200" />
      <p className="text-kt-gray-500 leading-snug text-center font-mono ">
        Stay Safe Out there <br /> Peace Out
      </p>
      <p className="text-kt-gray-500 leading-none text-center font-mono ">
        Built with <TiHeart className="inline" />{" "}
        <span className="text-kt-gray-200 hover:text-white cursor-pointer">
          T14
        </span>
      </p>
    </div>
  );
};

export default Footer;
