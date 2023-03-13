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
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'www.datocms-assets.com',
      'res.cloudinary.com',
    ],
    imageSizes: [24, 64, 300]
  },
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, topLevelAwait: true };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true 
    return config;
  },
});
