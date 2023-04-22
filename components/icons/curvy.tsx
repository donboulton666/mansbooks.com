import React from "react";

const Curvy: React.FC = () => {
  return (
    <svg viewBox="0 -20 700 110" 
      xmlns="http://www.w3.org/2000/svg"
      className="h-96 w-full"
      width="100%" 
      height="100%" 
      preserveAspectRatio="none"
    >
      <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" 
        fill="currentColor"
      >
      </path>
    </svg>
  );
};

export default Curvy;