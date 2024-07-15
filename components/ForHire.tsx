"use client";

import PrimaryIcon from "./PrimaryIcon";
import { TbMail, TbMailFilled } from "react-icons/tb";
import { IoCopy, IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import { FaSquareFull } from "react-icons/fa";
import SpecialWord from "./SpecialWord";
const ForHire = () => {
  const [hoveredIcon, setHoveredIcon] = useState<"open" | "copy" | null>(null);
  return (
    <div className="mt-6 flex flex-col gap-3">
      <h3 className="text-[16px] font-mono text-kt-orange flex items-center  gap-2">
        <FaSquareFull className="inline animate-pulse duration-700" size={8} />{" "}
        CURRENTLY ACCEPTING NEW WORKS.
      </h3>

      <div className="flex items-center gap-3">
        <div className="flex items-center justify-start gap-2 ">
          <div
            onMouseOver={() => {
              setHoveredIcon("open");
            }}
            onMouseLeave={() => {
              setHoveredIcon(null);
            }}
          >
            <OpenMail />
          </div>
          <div
            onMouseOver={() => {
              setHoveredIcon("copy");
            }}
            onMouseLeave={() => {
              setHoveredIcon(null);
            }}
          >
            <CopyMail />
          </div>
        </div>

        <div className="text-kt-gray-200 text-sm">
          {" "}
          <p>Want to Chat with Me!?</p>
          <div className="text-white font-medium">
            {hoveredIcon === null ? (
              <p className="text-kt-gray-200 font-normal">Send me email</p>
            ) : hoveredIcon === "open" ? (
              <p>Open your email application</p>
            ) : (
              <p>Copy my email to your clipboard</p>
            )}
          </div>
        </div>
      </div>
      <h4 className="font-mono text-sm text-kt-gray-200 ">
        OR YOU CAN{" "}
        <SpecialWord className="text-kt-orange " href="#">
          {" "}
          HIRE ME ON LINKEDIN
        </SpecialWord>
      </h4>
    </div>
  );
};

export default ForHire;

const OpenMail = () => {
  return (
    <PrimaryIcon
      clickFunction="open"
      outlineIcon={
        <TbMail
          className="opacity-100 icon-switch group-hover:opacity-0"
          size={24}
        />
      }
      hoverIcon={
        <TbMailFilled
          className="opacity-0 icon-switch group-hover:opacity-100"
          size={24}
        />
      }
    />
  );
};

const CopyMail = () => {
  return (
    <PrimaryIcon
      clickFunction="copy"
      outlineIcon={
        <IoCopyOutline
          className="opacity-100 icon-switch group-hover:opacity-0"
          size={24}
        />
      }
      hoverIcon={
        <IoCopy
          className="opacity-0 icon-switch group-hover:opacity-100"
          size={24}
        />
      }
    />
  );
};
