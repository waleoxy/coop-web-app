import Link from "next/link";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { Store } from "../contexts/store";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const { state, dispatch } = useContext(Store);
  const { isLogin } = state;
  const handleLogin = () => {
    dispatch({ type: "IS_LOGIN" });
  };

  return (
    <div
      className={
        show
          ? `px-10 flex items-center justify-between -top-6 z-50 h-20 w-screen sticky
           bg-rose-400 transition translate-y-6 duration-700
           bg-transparent text-white ease-in-out`
          : `px-10 flex items-center justify-between bg-orange-100 top-0 z-50 h-20 w-screen sticky`
      }>
      <div className="  flex items-center w-auto">
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
      <div
        className={
          show
            ? `flex items-center w-auto space-x-6 text-white text-base`
            : `flex items-center w-auto space-x-6 text-red-600 text-base`
        }>
        <Link href="/">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#newsletter">Newsletter</Link>
        <Link href="/#contact">Contact</Link>
        <Link href="/#faq">FAQ</Link>
      </div>{" "}
      <div className="w-28 mr-10">
        <Link href="/">
          <button
            onClick={handleLogin}
            className="px-4 py-1 w-28 bg-pink-700 text-white font-medium font-serif
          rounded-lg text-lg tracking-widest">
            {!isLogin ? `Login` : `Register`}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
