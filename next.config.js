/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  // experimental: {
  //   images: {
  //     allowFutureImage: true,
  //   },
  // },
  images: {
    domains: ['https://source.unsplash.com/random', 'https://cdn.pixabay.com'],
  },
}

module.exports = nextConfig;