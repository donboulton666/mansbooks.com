import React from "react";

const UserTile = ({ children }) => {
  return (
    <div className="relative m-2 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default UserTile;
