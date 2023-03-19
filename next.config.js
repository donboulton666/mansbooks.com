// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
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
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'www.datocms-assets.com',
      'res.cloudinary.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  // Support svg import
  // ref: https://dev.to/dolearning/importing-svgs-to-next-js-nna
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
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
