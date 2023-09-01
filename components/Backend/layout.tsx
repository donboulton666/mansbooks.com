import React from "react";
import { SWRProvider } from "./context/swr-provider";
import { ReactNode } from "react";
import { PropsWithChildren } from "react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Mansbooks",
  description: "Angelina Jordan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <SWRProvider>
        <div>{children}</div>
      </SWRProvider>
    </html>
  );
}
