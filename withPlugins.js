import withPlugins from 'next-compose-plugins';

export default withPlugins(
    {
      async rewrites() {
        return [
          {
            source: '/bee.js',
            destination: 'https://cdn.splitbee.io/sb.js',
          },
          {
            source: '/_hive/:slug',
            destination: 'https://hive.splitbee.io/:slug',
          },
        ];
      },
    }
  );
  