import React from "react";

const LeftText = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="justify-left mx-2 flex py-2 text-2xl italic text-wine-200 underline decoration-wine-300 decoration-wavy underline-offset-8 transition duration-300 dark:text-wine-300 dark:decoration-wine-300"
        {...delegated}
      >
        {children}
      </div>
    </>
  );
};

export default LeftText;
