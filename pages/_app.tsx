/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { SSRProvider, OverlayProvider } from "react-aria";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import ResizeHandler from "@components/resize-handler";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import { Toaster } from "react-hot-toast";
import { pageview } from '@lib/gtag';
import "@styles/global.css";
import "@styles/nprogress.css";
import "@styles/chrome-bug.css";

function App({ Component, pageProps, router }: AppProps) {
  const AnyComponent = Component as any;
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);
  useEffect(() => {
    const handleRouteChange = url => {
      pageview(url, document.title);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return (
    <SSRProvider>
      <OverlayProvider>
        <HMSRoomProvider>
          <AnyComponent {...pageProps} />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                margin: "40px",
                background: "#111111",
                color: "#fff",
                zIndex: 1,
              },
              duration: 5000,
            }}
          />
          <ResizeHandler />
        </HMSRoomProvider>
      </OverlayProvider>
    </SSRProvider>
  );
}

export default App;
