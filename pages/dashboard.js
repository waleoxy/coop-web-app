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
  let show = false;
  return (
    <div className=" bg-orange-100 min-h-screen">
      <div className="-mt-6 sticky">
        <Navbar show={show} />
      </div>
      <div className="flex px-28 mt-20 mx-12">
        <Sidebar />
        <CenterPage />
      </div>
    </div>
  );
};

export default Dashboard;
