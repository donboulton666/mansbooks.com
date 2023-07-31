import React from "react";

const UserWrapper = ({ level, children }) => {
  return (
    <div
      className="relative rounded-full"
      style={{
        boxShadow: `0px 0px ${level || 0 / 4}px #3d5afe`,
      }}
    >
      {children}
    </div>
  );
};

export default UserWrapper;
