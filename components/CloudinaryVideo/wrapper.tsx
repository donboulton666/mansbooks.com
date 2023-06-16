import React from "react";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="mb-10 w-full space-y-reverse bg-transparent text-center opacity-50">
      {children}
    </div>
  );
};

export default Wrapper;
