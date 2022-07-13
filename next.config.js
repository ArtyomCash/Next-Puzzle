/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  serverRuntimeConfig: {
    API_URL: process.env.REACT_APP_BASE_API_URL,
  },
  // Will be available on both server and client
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.REACT_APP_BASE_URL,
  },
  pageExtensions: ['*.tsx'],
};

const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'assets/images/icons'),
  webpack(config, options) {
    return config;
  },
});
