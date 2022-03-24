import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between top-0 z-50 h-20 w-full sticky">
      <div className="px-2 py-1 ml-6 flex items-center">
        <img
          className="h-20 w-16 py-2 bg-transparent"
          src="/images/imgLogo.png"
          alt="logo"
        />
        <img
          className="h-8 w-24 mt-6 bg-transparent"
          src="/images/coopLogo.png"
          alt="logo"
        />
      </div>
      <div className="flex items-center space-x-6 pt-3">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact</Link>
        <Link href="/">FAQ</Link>
      </div>{" "}
      <div>
        <Link href="/">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
