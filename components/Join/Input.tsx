import React from "react";

const Input = ({ state, ...props }) => {
  return (
    <input
      id="username"
      value={state.username}
      onChange={(e) => state.setUsername(e.target.value)}
      className="my-5 w-80 rounded-3xl border-none bg-slate-100 px-6 py-3 text-center placeholder-slate-200 outline-none ring-brand-100 focus:bg-black focus:ring-1 "
      {...props}
      type="text"
      placeholder="Enter Username"
    />
  );
};

export default Input;
