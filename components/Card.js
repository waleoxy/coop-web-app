import React from "react";
import { CashIcon } from "@heroicons/react/outline";

const Card = () => {
  return (
    <div className="w-56 rounded bg-white overflow-hidden shadow-lg">
      <div className="flex space-x-8 px-6 py-4">
        <div className="font-bold text-xl mb-2">NGN200,000</div>
        <CashIcon />
      </div>
      <div className="px-6">
        <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Balance
        </span>
      </div>
    </div>
  );
};

export default Card;
