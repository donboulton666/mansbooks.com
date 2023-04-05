import React from "react";

const VideoWrapper = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="h-full w-full rounded-lg border-2 border-wine-300 p-2"
        {...delegated}
      >
        {children}
      </div>
    </>
  );
};

export default VideoWrapper;
