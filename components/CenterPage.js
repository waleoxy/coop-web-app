import React from "react";
import Card from "./Card";
import Table from "./Table";

const CenterPage = () => {
  return (
    <div className="flex flex-col px-6">
      <p
        className="text-2xl font-semibold tracking-wide
       font-mono">
        Dashboard
      </p>
      <div className="flex space-x-3">
        <Card />
        <Card />
        <Card />
      </div>
      <Table />
    </div>
  );
};

export default CenterPage;
