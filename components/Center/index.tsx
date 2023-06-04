import React from "react";

const Center = ({ children, ...delegated }) => {
  return (
    <>
      <div
        className="mb-2 flex justify-center pb-4 text-2xl italic text-blue-400 underline decoration-wine-300 decoration-wavy underline-offset-8 transition duration-300"
        {...delegated}
      >
        {children}
      </div>
    </>
  );
};

export default Center;
