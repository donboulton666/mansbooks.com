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

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="loading">
          <Main />
          <NextScript />
          <Script
            src="cookiehub.js"
            strategy="afterInteractive"
          />
          <Script
            src="gtm.js"
            strategy="afterInteractive"
          />
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXRSPG6"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          </noscript>
        </body>
      </Html>
    );
  }
}
