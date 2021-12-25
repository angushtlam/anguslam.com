const withPlugins = require('next-compose-plugins');

const withImages = require("next-images");
const withMDX = require('@next/mdx')()

module.exports =
  withPlugins([withImages, withMDX()]);
