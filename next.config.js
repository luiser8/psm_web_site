module.exports = {
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.vercel.com',
          port: '',
        },
      ],
    },
  }