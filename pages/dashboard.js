import React from "react";
import CenterPage from "../components/CenterPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className=" bg-orange-50 min-h-screen">
      <Navbar />
      <div className="flex px-28 mt-20 mx-12">
        <Sidebar />
        <CenterPage />
      </div>
    </div>
  );
};

export default Dashboard;
