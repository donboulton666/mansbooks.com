// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  experimental: {
    serverActions: true,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  i18n: {
    locales: ["en", "es", "it", "nn"],
     defaultLocale: "en",
     localeDetection: false,
  },
  env: {
    DATOCMS_READ_ONLY_API_TOKEN:
      process.env.DATOCMS_READ_ONLY_API_TOKEN ,
    UPSTASH_REDIS_REST_TOKEN:
      process.env.UPSTASH_REDIS_REST_TOKEN,
    UPSTASH_REDIS_REST_URL:  
      process.env.UPSTASH_REDIS_REST_URL,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    formats: ['image/avif', 'image/webp'],
    domains: [
      'www.datocms-assets.com',
      'res.cloudinary.com',
      "encrypted-tbn0.gstatic.com",
      "raw.githubusercontent.com",
      'avatars.githubusercontent.com',
      'github.com',
      'ca.slack-edge.com',
      'supabase.com',
      'pbs.twimg.com',
    ],
  },
  // Support svg import
  // ref: https://dev.to/dolearning/importing-svgs-to-next-js-nna
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds/',
          outputPath: 'static/sounds/',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
});

module.exports = nextConfig

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://apis.google.com/ https://netlify-rum.netlify.app/netlify-rum.js https://apis.google.com/js/platform.js cdn.vercel-insights.com https://youtube.com *.youtube.com *.twitter.com *.giscus.app *.apis.google.com *.googleapis.com *.googletagmanager.com *.netlify-rum.netlify.app *.gstatic.com cdn.usefathom.com;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' https://fonts.googleapis.com *.googleapis.com 'unsafe-inline' data:;
  frame-src https://www.youtube-nocookie.com/ https://giscus.app/ https://accounts.google.com/ youtube.com *.youtube.com *.twitter.com *.giscus.app;
  img-src * blob: data:;
  worker-src https://mansbooks.com/sw.js http://localhost:3000/sw.js;
  media-src https://res.cloudinary.com/mansbooks/video/upload/vc_auto/v1/videos/Angelina_Jordan_-_Love_Dont_Let_Me_Go_-Visualizer-.mp4 *.res.cloudinary.com *.youtube.com *.raw.githubusercontent.com;
  connect-src *;
  font-src 'self' https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2 https://fonts.googleapis.com *.assets.vercel.com *.googleapis.com *.fonts.googleapis.com https://fonts.gstatic.com *.fonts.gstatic.com;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  // Opt-out of Google FLoC: https://amifloced.org/
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: 'X-Robots-Tag',
    value: 'all',
  },
]