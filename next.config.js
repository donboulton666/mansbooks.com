// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
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
