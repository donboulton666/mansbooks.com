// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'www.datocms-assets.com',
    ],
    imageSizes: [24, 64, 300]
  },
});
