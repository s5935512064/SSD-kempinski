/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@fancyapps/ui"]);

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins([nextConfig, withTM]);
