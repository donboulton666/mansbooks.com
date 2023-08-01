import React from "react";

const ChatFeed = ({ children }) => {
  return (
    <div
      id="chat-feed"
      className="nav-scroll flex w-full flex-col px-1"
      style={{ height: "calc(60vh - 100px)" }}
    >
      {children}
    </div>
  );
};

export default ChatFeed;
