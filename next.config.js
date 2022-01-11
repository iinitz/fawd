/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache")

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  images: {
    domains: ['www.w3.org', 'upload.wikimedia.org', 'researchhubs.com'],
  },
})
