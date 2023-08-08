import React from "react";
import SupabaseProvider from "./supabase-provider";
import { ReactNode } from "react";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "User Management",
  description: "Angelina Jordan Backend",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <SupabaseProvider>
        <body>
          <div>{children}</div>
        </body>
      </SupabaseProvider>
    </html>
  );
}
