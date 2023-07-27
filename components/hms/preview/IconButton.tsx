import React from "react";
import { FC } from "react";

const IconButton: FC<{ active?: boolean; onClick?: () => void }> = ({
  active = false,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-md p-1 ${
        active ? "bg-white text-black" : "icon-btn"
      }`}
      type="button"
    >
      {children}
    </button>
  );
};

export default IconButton;
