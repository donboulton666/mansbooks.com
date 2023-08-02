import React from "react";
import cn from "classnames";

interface LinkButtonProps {
  type?: JSX.IntrinsicElements["button"]["type"];
  variant?: "secondary" | "primary" | "danger";
  className?: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps & JSX.IntrinsicElements["a"]> = ({
  variant = "primary",
  className = "",
  children,
  href = "/",
  ...props
}) => {
  const baseClass = `flex items-center justify-center rounded-lg p-2 cursor-pointer disabled:cursor-not-allowed focus:outline-none text-slate-300`;
  let variantClass = ``;
  if (variant === "danger") {
    variantClass = `bg-red-500 hover:bg-red-600 focus:bg-red-400`;
  } else if (variant === "secondary") {
    variantClass = `bg-slate-600 hover:bg-slate-500 focus:bg-slate-400`;
  } else {
    variantClass = `bg-brand-300 hover:bg-brand-200 focus:bg-brand-400`;
  }
  return (
    <a
      className={cn(baseClass, variantClass, className)}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkButton;
