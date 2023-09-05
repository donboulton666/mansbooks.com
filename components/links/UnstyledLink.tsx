import React from "react";
import { ReactNode, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";

export type UnstyledLinkProps = {
  href: string;
  children: ReactNode;
  openNewTab?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<"a"> &
  LinkProps;

export default function UnstyledLink({
  children,
  href,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith("/") && !href.startsWith("#");

  if (!isNewTab) {
    return (
      <Link href={href}>
        <span {...rest} className={className}>
          {children}
        </span>
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={clsx(className, "cursor-newtab")}
    >
      {children}
    </a>
  );
}
