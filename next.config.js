/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  distDir: "build",
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru", "tm"],
    defaultLocale: "tm",
    localeDetection: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
//   experimental: {
//     images: {
//         allowFutureImage: true
//     }
// }
});
