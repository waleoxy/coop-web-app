import React, { useContext } from "react";
import { Store } from "../contexts/store";
import Profile from "../pages/profile";
import Card from "./Card";
import ProfilePage from "./ProfilePage";
import Table from "./Table";

const CenterPage = () => {
  const { state, dispatch } = useContext(Store);
  const { isProfOpen } = state;

  return (
    <div className="mt-0 flex flex-col px-6 bg-gray-100 h-full py-3 w-full">
      <div className="flex space-x-3">
        <Card isBalance={true} text="Your balance" amount="NGN-300,000" />
        <Card text="Your savings" amount="NGN600,000" />
        <Card text="Your loan" amount="NGN900,000" />
      </div>
      <div className="">{isProfOpen ? <ProfilePage /> : <Table />}</div>
    </div>
  );
};

export default CenterPage;
