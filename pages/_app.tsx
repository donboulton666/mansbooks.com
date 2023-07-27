import "@styles/global.css";
import "@styles/nprogress.css";
import "@styles/chrome-bug.css";
import React from "react";
import { SSRProvider, OverlayProvider } from "react-aria";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import ResizeHandler from "@components/resize-handler";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import { pageview } from "@lib/gtag";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { PersistGate } from "redux-persist/integration/react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { wrapper } from "../store/store";

TimeAgo.addDefaultLocale(en);

function App({ Component, pageProps, router, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const AnyComponent = Component as any;
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url, document.title);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SSRProvider>
      <OverlayProvider>
        <HMSRoomProvider>
          <SessionContextProvider
            supabaseClient={supabase}
            initialSession={pageProps.initialSession}
          >
            <PersistGate
              persistor={store.__persistor}
              loading={<div>Loading</div>}
            >
              <AnyComponent {...pageProps} />
            </PersistGate>
          </SessionContextProvider>
          <ResizeHandler />
        </HMSRoomProvider>
      </OverlayProvider>
    </SSRProvider>
  );
}

export default App;
