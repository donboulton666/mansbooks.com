import React from 'react';

const ChatFeed = ({ children }) => {
  return (
    <div
      id='chat-feed'
      className='w-full px-2 flex flex-col nav-scroll'
      style={{ height: 'calc(80vh - 100px)' }}
    >
      {children}
    </div>
  );
};

export default ChatFeed;
