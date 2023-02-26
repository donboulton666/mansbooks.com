import React from "react";

const LeftText = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="justify-left mx-2 flex py-2 text-2xl italic text-blue-600 underline decoration-blue-600 decoration-wavy underline-offset-8 transition duration-300 dark:text-blue-600 dark:decoration-blue-600"
        {...delegated}
      >
        {children}
      </div>
    </>
  );
};

export default LeftText;
