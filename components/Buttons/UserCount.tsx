import React from "react";
import UsersIcon from "../icons/UsersIcon";

const UserCount = ({ count }) => {
  return (
    <div className="flex items-center space-x-2 rounded-3xl bg-slate-800 px-6 py-3  font-bold text-slate-300">
      <UsersIcon /> <div className="inline-block">{count}</div>
    </div>
  );
};

export default UserCount;
