import "@styles/global.css";
import "@styles/chrome-bug.css";
import React from "react";
import { OverlayProvider } from "react-aria";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import ResizeHandler from "@components/resize-handler";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);

function App({
  Component,
  pageProps,
  router,
}: AppProps<{
  initialSession: Session;
}>) {
  const AnyComponent = Component as any;
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  const [supabase] = useState(() => createPagesBrowserClient());

  return (
    <OverlayProvider>
      <HMSRoomProvider>
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        >
          <AnyComponent {...pageProps} />
        </SessionContextProvider>
        <ResizeHandler />
      </HMSRoomProvider>
    </OverlayProvider>
  );
}

export default App;
