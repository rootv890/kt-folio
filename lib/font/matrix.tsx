import React from "react";
import { japaneseCharacters } from "./randomChars";

function Matrix() {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90 z-0">
        {/* Animated characters */}
        <div className="absolute top-0 text-kt left-0 w-full h-full overflow-hidden">
          {/* Characters and 0s/1s */}
        </div>
      </div>
    </div>
  );
}

export default Matrix;
