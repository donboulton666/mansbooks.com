import React from "react";

const LeaveButton = ({ onClick }) => {
  return (
    <button
      className="w-40 rounded-3xl border-none bg-red-600 px-6 py-3 font-bold text-white outline-none ring-brand-100 hover:opacity-80 focus:ring-1"
      onClick={onClick}
    >
      Leave
    </button>
  );
};

export default LeaveButton;
