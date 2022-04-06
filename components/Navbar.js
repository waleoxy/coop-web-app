import Link from "next/link";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { Store } from "../contexts/store";

const Navbar = () => {
  const { state, dispatch } = useContext(Store);
  const { isShow, isLogin } = state;

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      dispatch({ type: "IS_SHOW" });
    } else {
      dispatch({ type: "IS_NOT_SHOW" });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const handleLogin = () => {
    dispatch({ type: "IS_LOGIN" });
  };

  return (
    <div
      className={
        isShow
          ? `px-10 flex items-center justify-between -top-6 z-50 h-20 w-screen sticky
           bg-rose-800 transition translate-y-6 duration-700
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
          className="h-8 w-24 mt-6"
          src={isShow ? `/images/coopLogo.png` : `/images/coopLogoH.png`}
          alt="logo"
        />
      </div>
      <div
        className={
          isShow
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

// export async function getStaticProps() {

//   return {
//     props: {

//     },
//   };
// }
