import React from "react";

const Chat = ({ msg }) => {
  return (
    <div className="my-1 flex flex-col -space-y-1 rounded-lg bg-[#121212] px-3 py-1 text-left ">
      <span className="text-sm font-semibold text-slate-200">
        {msg.senderName}
      </span>
      <span className="font-semibold text-slate-300">{msg.message}</span>
    </div>
  );
};

export default Chat;
