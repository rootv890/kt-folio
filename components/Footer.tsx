import React from "react";
import { BsTerminalFill } from "react-icons/bs";
import { TiHeart } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6  my-12">
      <BsTerminalFill size={24} className="text-kt-gray-200" />
      <p className="text-kt-gray-500 leading-none text-center font-mono w-1/2">
        Stay Safe Out Here Peace Out
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
