import React from "react";

const Table = () => {
  return (
    <table
      className="table-fixed border-collapse  border-slate-200 
    mt-11 p-1 bg-white">
      <thead>
        <p className="h-10 py-2 pl-2 border-b-2">Latest Transactions</p>
        <tr className="bg-slate-50 h-8">
          <th className="border- border-slate-200">Song</th>
          <th className="border border-slate-200">Artist</th>
          <th className="border border-slate-200">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-10">
          <td className="border border-slate-200">
            The Sliding Mr. Bones (Next Stop, Pottersville)
          </td>
          <td className="border border-slate-200">Malcolm Lockyer</td>
          <td className="border border-slate-200">1961</td>
        </tr>
        <tr className="h-10">
          <td className="border border-slate-200">Witchy Woman</td>
          <td className="border border-slate-200">The Eagles</td>
          <td className="border border-slate-200">1972</td>
        </tr>
        <tr className="h-10">
          <td className="border border-slate-200">Shining Star</td>
          <td className="border border-slate-200">Earth, Wind, and Fire</td>
          <td className="border border-slate-200">1975</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
