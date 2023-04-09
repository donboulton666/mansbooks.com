import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class CustomDocument extends Document {
  render() {
    const { lanaguage } = this.props.__NEXT_DATA__.query;
    return (
      <Html lang={lanaguage}>
        <Head>
          <meta name="application-name" content="Mansbooks" />
          <meta name="slack-app-id" content="A04TYHWB0S3" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Mansbooks" />
          <meta name="description" content="Best Mansbooks in the world" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#111111" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/touch-icon-ipad-retina.png"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&Noto+Sans+HK:wght@700&family=Noto+Sans+JP:wght@700&family=Noto+Sans+KR:wght@700&family=Noto+Sans+SC:wght@700&family=Noto+Sans+TC:wght@700&family=Noto+Sans:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="sitemap"
            type="application/xml"
            title="Sitemap"
            href="/sitemap.xml"
          />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional"
          />
          <meta
            name="google-site-verification"
            content="DERBmWes64nsERJF7euwN3Y7sarDxsPOx3eDQUB21uM"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://mansbooks.com" />
          <meta name="twitter:title" content="Mansbooks" />
          <meta
            name="twitter:description"
            content="Angelina Jordan at mansbooks.com"
          />
          <meta
            name="twitter:image"
            content="https://mansbooks.com/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@donboulton" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Mansbooks" />
          <meta
            property="og:description"
            content="Best Mansbooks in the world"
          />
          <meta property="og:site_name" content="Mansbooks" />
          <meta property="og:url" content="https://mansbooks.com" />
          <meta
            property="og:image"
            content="https://mansbooks.com/icons/apple-touch-icon.png"
          />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6QPYXMYV09"
          />
          <Script
            id="gtag"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-6QPYXMYV09');`,
            }}
          />
          <Script
            id="cookiehub"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {'ad_storage': 'denied', 'analytics_storage': 'denied', 'wait_for_update': 500});
              var cpm = {};
              (function(h,u,b){
              var d=h.getElementsByTagName("script")[0],e=h.createElement("script");
              e.async=true;e.src='https://cookiehub.net/c2/6b9c3004.js';
              e.onload=function(){u.cookiehub.load(b);};
              d.parentNode.insertBefore(e,d);
              })(document,window,cpm);`,
            }}
          />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXRSPG6" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
        </body>
      </Html>
    );
  }
}
