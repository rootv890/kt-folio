"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

interface KeyTogglerProps {
  theKey: string;
}

const KeyToggler = ({ theKey }: KeyTogglerProps) => {
  const { theme, setTheme } = useTheme();

  // Handle the Keypress in useEffect
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Check if the focused element is an input or textarea
      const target = e.target as HTMLElement;
      const isInputFocused =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA";

      if (!isInputFocused && e.key === theKey) {
        toggleTheme();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [theKey, theme, setTheme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className=" hidden md:inline-block px-3 py-1.5 
      bg-gradient-to-t from-kt-900 to-kt-gray-100
      border border-gray-300/50 rounded-sm shadow-md text-gray-800 font-mono transform transition-transform duration-150 hover:translate-y-0.5 hover:shadow-kt active:translate-y-1"
    >
      <span className="text-kt text-sm">T</span>
    </button>
  );
};

export default KeyToggler;
