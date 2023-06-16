import React from "react";

const VideoWrapper = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="w-full flex-initial rounded-lg border-2 border-wine-300 p-2"
        {...delegated}
      >
        {children}
      </div>
    </>
  );
};

export default VideoWrapper;
