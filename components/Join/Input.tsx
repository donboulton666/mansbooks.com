import React from 'react';

const Input = ({ state, ...props }) => {
  return (
    <input
      id="username"
      value={state.username}
      onChange={(e) => state.setUsername(e.target.value)}
      className='px-6 my-5 text-center py-3 w-80 bg-slate-100 focus:bg-black rounded-3xl border-none focus:ring-1 ring-brand-100 outline-none placeholder-slate-200 '
      {...props}
      type='text'
      placeholder='Enter Username'
    />
  );
};

export default Input;
