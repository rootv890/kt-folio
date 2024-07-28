import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface SpecialWordProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const SpecialWord = ({ children, href, className }: SpecialWordProps) => {
  return (
    <span
      className={cn(
        "text-kt  underline-offset-8 cursor-pointer font-mono",
        className
      )}
    >
      <Link className=" " href={href}>
        {children}
      </Link>
    </span>
  );
};

export default SpecialWord;
