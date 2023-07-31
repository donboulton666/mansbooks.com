import React from "react";

interface Props {
  active?: boolean;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ControlButton: React.FC<Props> = ({
  active,
  text,
  children,
  onClick,
  className = "",
}) => {
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        type="button"
        className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-solid ${
          active ? "border-slate-200" : "border-slate-base"
        } focus:border-slate-400 focus:bg-slate-800 focus:outline-none ${className}`}
      >
        {children}
      </button>
      <span className="mt-1 text-xxs">{text}</span>
    </div>
  );
};

export default ControlButton;
