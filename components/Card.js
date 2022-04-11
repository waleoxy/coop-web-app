import React from "react";
import { CashIcon } from "@heroicons/react/outline";

const Card = ({ text, amount, isBalance = false, negative = true }) => {
  return (
    <div
      className={
        isBalance
          ? `w-auto rounded-xl bg-white overflow-hidden shadow-lg`
          : `w-auto rounded-xl bg-white overflow-hidden shadow-lg hover:scale-95 hover:ease-in-out cursor-pointer`
      }>
      <div className="flex space-x-5 px-6 py-4">
        <div className="font-bold text-sm text-red-900 mb-2">{amount}</div>
        <CashIcon className="h-5 w-5 text-red-400" />
      </div>
      <div
        className={
          isBalance && negative ? `bg-red-500 px-4` : `bg-blue-900 px-4`
        }>
        <span className="inline-flex text-center text-white px-3 py-1 text-sm font-semibold mr-2 mb-2">
          #{text}
        </span>
      </div>
    </div>
  );
};

export default Card;
