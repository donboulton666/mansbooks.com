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
import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';

export default class CustomDocument extends Document {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
  }, []);
  render() {
    const options = {
      preset: "stars",
    };
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
          <Script
            src="noscript.js"
            strategy="afterInteractive"
          />
          {/* @ts-ignore */}
          <Particles id="tsparticles" init={this.particlesInit} loaded={this.particlesLoaded} options={options} />
        </body>
      </Html>
    );
  }
}
