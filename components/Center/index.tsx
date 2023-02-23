import React from "react";

const Center = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="mb-2 flex justify-center pb-4 text-2xl italic text-blue-600 underline decoration-blue-600 decoration-wavy underline-offset-8 transition duration-300 dark:text-blue-600 dark:decoration-blue-600"
        {...delegated}
      >
        {children}
      </div>
    </>
  );
};

export default Center;
