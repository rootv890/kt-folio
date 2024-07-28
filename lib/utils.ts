import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Preload images
const preloadFonts = (id: any) => {
  return new Promise((resolve) => {
    WebFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    });
  });
};

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export { cn, preloadFonts, randomNumber };
