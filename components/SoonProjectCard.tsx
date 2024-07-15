import Image from "next/image";
import React from "react";

const ComingSoonProjectCard = () => {
  return (
    <li className="bg-background h-fit  max-w-full border  w-full p-3 dark:border-kt-gray-900 group hover:border-kt pt-6 group-hover:border-kt  rounded-lg flex gap-4 flex-col group ">
      {/* Content */}
      <div className="font-mono  h-fit text-kt-gray-200 text-sm">
        <h5 className="text-kt uppercase">Project Name</h5>
        <p className="mt-4">
          Simple Description goes here takes some space! let&#39;s say about two
          line max!
        </p>
      </div>
    </li>
  );
};

export default ComingSoonProjectCard;
