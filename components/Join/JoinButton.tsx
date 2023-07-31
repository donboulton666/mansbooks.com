import React from "react";

const JoinButton = ({ onClick, joinRoom }) => {
  return (
    <button
      id="join-btn"
      type="button"
      onClick={joinRoom}
      className="w-80 rounded-3xl border-none bg-brand-100 px-6 py-3 font-bold text-slate-900 outline-none ring-brand-100 hover:opacity-80 focus:ring-1"
    >
      Join Room
    </button>
  );
};

export default JoinButton;
