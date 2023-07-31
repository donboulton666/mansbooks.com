import React from 'react';

const ChatLayout = ({ children }) => {
  return (
    <div className='flex flex-col w-80 bg-black opacity-50 rounded-lg chat-shadow relative'>
      <div className='font-bold text-lg my-1 py-1 border-b border-slate-900'>
        {" "}Messages
      </div>
      {children}
    </div>
  );
};

export default ChatLayout;
