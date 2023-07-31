import React from 'react';

const Chat = ({ msg }) => {
  return (
    <div className='flex flex-col -space-y-1 my-1 px-3 py-1 bg-[#121212] rounded-lg text-left '>
      <span className='text-slate-200 text-sm font-semibold'>
        {msg.senderName}
      </span>
      <span className='text-slate-300 font-semibold'>{msg.message}</span>
    </div>
  );
};

export default Chat;
