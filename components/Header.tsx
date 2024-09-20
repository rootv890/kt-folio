import React from "react";
import Link from "next/link";
// import KeyToggler from "./KeyToggler";

const Header = () => {
  return (
    <div className=" max-sm:px-4 w-full pt-9 font-mono flex  items-center justify-between">
      <div>
        <Link href={"#"} className="logo-text ">
          Pruthviraj
        </Link>
        <a
          href="https://x.com/rootv_890"
          target="_blank"
          className="ml-2 hover:text-kt-gray-100 text-kt-gray-500 text-[16px]"
        >
          / @{process.env.NEXT_PUBLIC_username}
        </a>
      </div>
      {/* <KeyToggler theKey="t" /> */}
    </div>
  );
};

export default Header;
