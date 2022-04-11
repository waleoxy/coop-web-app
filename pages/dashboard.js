import React, { useContext, useEffect } from "react";
import CenterPage from "../components/CenterPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Store } from "../contexts/store";

const Dashboard = () => {
  const { state, dispatch } = useContext(Store);
  const { isShow } = state;
  useEffect(() => {
    dispatch({ type: "IS_SHOW" });
  }, []);

  return (
    <div className=" bg-white min-h-screen w-screen">
      <div className="-mt-6 sticky">
        <Navbar />
      </div>
      <div className="flex px-20 mt-16 mx-16 h-full ">
        <div className="w-56 h-full">
          {" "}
          <Sidebar />
        </div>

        <div className="flex flex-col w-full">
          <p
            className="pl-6 text-rose-900 text-xl font-semibold tracking-wide
       font-mono">
            Dashboard
          </p>
          <CenterPage />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
