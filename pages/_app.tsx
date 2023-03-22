import React from "react";
import { SSRProvider, OverlayProvider } from "react-aria";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import ResizeHandler from "@components/resize-handler";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import "@styles/global.css";
import "@styles/nprogress.css";
import "@styles/chrome-bug.css";
import "@styles/chatbox.css";
import dynamic from "next/dynamic";

const ChatBoxWidget = dynamic({
  loader: () => import("@upstash/chatbox").then((mod) => mod.ChatBoxWidget),
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);
  return (
    <SSRProvider>
      <OverlayProvider>
        <HMSRoomProvider>
          <ChatBoxWidget />
          <AnyComponent {...pageProps} />
          <ResizeHandler />
        </HMSRoomProvider>
      </OverlayProvider>
    </SSRProvider>
  );
}

export default App;
