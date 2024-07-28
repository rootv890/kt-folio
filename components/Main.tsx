import React, { useState } from "react";
import SpecialWord from "./SpecialWord";
import ForHire from "./ForHire";
import { japaneseCharacters } from "@/lib/font/randomChars";
import TypeShuffle from "@/lib/typeshuffle";

const Main = () => {
  return (
    <TypeShuffle triggerOnce text="" effect={"fx1"}>
      <div className="max-sm:px-4 relative">
        <h2 className="hero-text">
          {/* <TypeShuffle effect={effect}>
          CYBER SECURITY ANALYST FOCUSED ON NEW WEB SECURITY.
        </TypeShuffle> */}
          CYBER SECURITY ANALYST FOCUSED ON NEW WEB SECURITY.
        </h2>
        {/* // TODO : 3D Component or AppleEmoji of KT */}
        <div className="mt-6 md:w-3/4 text-justify">
          <p className="text-[18px] text-kt-gray-500 dark:text-kt-gray-100 leading-relaxed">
            Hey there! I&#39;m{" "}
            <SpecialWord href="#">Khrystyna Tvyoniuk</SpecialWord>,{" "}
            <SpecialWord
              className="dark:text-white text-black hover:no-underline"
              href="#"
            >
              Cyber Security Analyst and Threat Researcher.
            </SpecialWord>{" "}
            Currently, I&#39;m on a mission to protect online businesses from
            cyber threats at{" "}
            <SpecialWord className="dark:text-white text-black " href="#">
              Mitto Studio.
            </SpecialWord>{" "}
          </p>
        </div>
        <ForHire />
      </div>
    </TypeShuffle>
  );
};

export default Main;
