import React from "react";

const Sidebar = () => {
  return (
    <div className=" bg-white w-64 h-96">
      <div
        className=" flex flex-col justify-center 
    items-center my-4 ">
        <div className="flex justify-center mt-1 h-20 w-20 bg-slate-300 rounded-full">
          <img
            className="h-20 w-16 py-2 bg-transparent"
            src="/images/imgLogo.png"
            alt
          />
        </div>
        <p className="text-lg font-semibold"> User's Name</p>
      </div>
      <div>
        <p
          className="w-full h-10 bg-red-200
        text-justify my-1 pt-2 self-center text-sm px-2">
          Dashboard
        </p>
        <p
          className="w-full my-1 h-10 bg-red-200
        text-justify pt-2 px-2 self-center text-sm">
          Dashboard
        </p>
        <p
          className="w-full my-1 h-10 bg-red-200
        text-justify pt-2 px-2 self-center text-sm">
          Dashboard
        </p>
        <p
          className="w-full my-1 h-10 bg-red-200
        text-justify pt-2 px-2 self-center text-sm">
          Dashboard
        </p>
        <p
          className="w-full my-1 h-10 bg-red-200
        text-justify pt-2 px-2 self-center text-sm">
          Dashboard
        </p>
        <p
          className="w-full my-1 h-10 bg-red-200
        text-justify pt-2 px-2 self-center text-sm">
          Dashboard
        </p>
        <p
          className="w-full my-1 h-10 bg-red-200
        text-justify pt-2 px-2 self-center text-sm">
          Dashboard
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
