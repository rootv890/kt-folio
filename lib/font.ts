import { Inter } from "next/font/google";
import localFont from "next/font/local";
import path from "path";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const supply = localFont({
  src: [
    {
      path: "./font/PPSupplyMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/PPSupplyMono-Ultralight.otf",
      weight: "200",
      style: "light",
    },
  ],
  variable: "--font-supply",
});

export { inter, supply };
