/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["www.daedaesonson.site", "via.placeholder.com", "localhost"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**.daedaesonson.site",
    //     port: "",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "via.placeholder.com",
    //     port: "",
    //   },
    // ],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

module.exports = nextConfig;
