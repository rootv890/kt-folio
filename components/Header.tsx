import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import KeyToggler from "./KeyToggler";

const Header = () => {
  return (
    <div className=" max-sm:px-4 w-full pt-9 font-mono flex  items-center justify-between">
      <div>
        <Link href={"#"} className="logo-text ">
          Khrystyna T.
        </Link>
        <a
          href=""
          className="ml-2 hover:text-kt-gray-100 text-kt-gray-500 text-[16px]"
        >
          / @ash_8tty9
        </a>
      </div>
      <KeyToggler theKey="t" />
    </div>
  );
};

export default Header;
