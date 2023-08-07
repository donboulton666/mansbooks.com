import React from "react";

const ChatLayout = ({ children }) => {
  return (
    <div className="chat-shadow absolute right-6 mt-10 flex w-80 flex-col rounded-lg bg-black opacity-50">
      <div className="my-1 ml-2 border-b border-slate-900 py-1 text-lg font-bold">
        {" "}
        Messages
      </div>
      {children}
    </div>
  );
};

export default ChatLayout;
