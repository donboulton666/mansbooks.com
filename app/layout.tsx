import React from "react";
import { ReactNode } from "react";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "User Management",
  description: "Angelina Jordan Backend",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
