import React from "react";
import SectionTitle from "./SectionTitle";
import data from "@/lib/socialpresence";
import TypeShuffle from "@/lib/typeshuffle";
const SocialPresence = () => {
  return (
    <div className="max-sm:px-4 flex flex-col justify-start  w-full">
      <SectionTitle title="My Social Presence" />

      <div>
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-6">
          {data.map((item) => (
            <li key={item.id}>
              <TypeShuffle triggerOnce triggerOnHover effect="fx1">
                <a
                  href={item.link}
                  rel="noreferrer"
                  className="font-mono hover:bg-kt hover:text-kt-gray-900 translate-x-0 ease-linear uppercase gap-3 text-kt place-items-center transition-all  justify-evenly"
                >
                  {item.name}
                </a>
              </TypeShuffle>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialPresence;
