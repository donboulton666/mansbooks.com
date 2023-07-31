import React from "react";

const ChatFeed = ({ children }) => {
  return (
    <div
      id="chat-feed"
      className="nav-scroll flex w-full flex-col px-2"
      style={{ height: "calc(80vh - 100px)" }}
    >
      {children}
    </div>
  );
};

export default ChatFeed;
