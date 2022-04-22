import { HomeIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../contexts/store";

const Sidebar = () => {
  const { state, dispatch } = useContext(Store);

  const openProfile = () => {
    dispatch({ type: "PROFILE_OPEN" });
  };
  const closeProfile = () => {
    dispatch({ type: "PROFILE_CLOSE" });
  };

  return (
    <div className=" bg-slate-100 w-56 h-full mt-7 rounded-lg">
      <div
        className=" flex flex-col justify-center 
    items-center my-4 ">
        <div className="flex justify-center mt-1 h-20 w-20 bg-slate-300 rounded-full">
          <img
            className="h-20 w-16 py-2 bg-transparent"
            src="/images/imgLogo.png"
            alt="pix"
          />
        </div>
        <p className="text-lg font-semibold"> User/s Name</p>
      </div>
      <div>
        <p
          onClick={closeProfile}
          className="w-full h-10 bg-gray-600 active:scale-95 cursor-pointer flex
        text-justify my-1 pt-2 self-center text-blue-100 text-base px-2">
          <span className="h-6 w-6">
            <HomeIcon className="font-light h-5 w-5 text-white" />{" "}
          </span>
          Dashboard
        </p>
        <p
          onClick={openProfile}
          className="flex w-full my-1 h-10  bg-gray-50 cursor-pointer
        text-justify pt-2 px-2 self-center text-sm
        hover:bg-gray-300 hover:scale-95 text-blue-900">
          <span className="h-6 w-6">
            <UserIcon className="font-light h-5 w-5 text-blue-900" />{" "}
          </span>
          Profile
        </p>

        <p
          className="flex w-full my-1 h-10  bg-gray-50 cursor-pointer
        text-justify pt-2 px-2 self-center text-sm
        hover:bg-gray-300 hover:scale-95">
          <span className="h-6 w-6">
            <UserIcon className="font-light h-5 w-5 text-blue-900" />{" "}
          </span>
          Savings
        </p>
        <p
          className="flex w-full my-1 h-10  bg-gray-50 cursor-pointer
        text-justify pt-2 px-2 self-center text-sm
        hover:bg-gray-300 hover:scale-95">
          <span className="h-6 w-6">
            <UserIcon className="font-light h-5 w-5 text-blue-900" />{" "}
          </span>
          Loans
        </p>
        <p
          className="flex w-full my-1 h-10  bg-gray-50 cursor-pointer
        text-justify pt-2 px-2 self-center text-sm
        hover:bg-gray-300 hover:scale-95">
          <span className="h-6 w-6">
            <UserIcon />{" "}
          </span>
          Withdrawals
        </p>
        <p
          className="flex w-full my-1 h-10  bg-gray-50 cursor-pointer
        text-justify pt-2 px-2 self-center text-sm
        hover:bg-gray-300 hover:scale-95">
          <span className="h-6 w-6">
            <UserIcon className="font-light h-5 w-5 text-blue-900" />{" "}
          </span>
          Shares
        </p>
        <p
          className="flex w-full my-1 h-10  bg-gray-50 cursor-pointer
        text-justify pt-2 px-2 self-center text-sm
        hover:bg-gray-300 hover:scale-95">
          <span className="h-6 w-6">
            <UserIcon className="font-light h-5 w-5 text-blue-900" />{" "}
          </span>
          Settings
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
