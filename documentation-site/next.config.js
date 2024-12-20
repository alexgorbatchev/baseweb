/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-env node */

const { resolve, relative } = require('path');
const fs = require('fs');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const baseuiDir = resolve(__dirname, './baseui');
console.log('>> Using baseui from', relative(__dirname, baseuiDir));
console.log('>> To update, please run `yarn build` in the parent directory if necessary');

module.exports = withMDX({
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: {
    loadYard: process.env.LOAD_YARD,
  },
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  output: 'export',
  distDir: './dist',
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Exclude image formats from next-image-loader
    const imageRuleIndex = config.module.rules.findIndex(
      (rule) => rule.loader === 'next-image-loader'
    );
    if (imageRuleIndex !== -1) {
      config.module.rules[imageRuleIndex].exclude = /\.(png|jpe?g|gif|webp|svg)$/i;
    }

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });

    config.optimization.splitChunks.maxSize = 20_000;

    try {
      const stats = fs.statSync(baseuiDir);
      if (!stats.isDirectory()) throw new Error('no dist');
    } catch {
      console.error(`Missing ${baseuiDir}`);
      console.error('Please run `yarn build` in the parent directory');
      process.exit(1);
    }

    config.resolve.alias.baseui = baseuiDir;
    config.resolve.alias.examples = resolve(__dirname, 'examples');

    // references next polyfills example: https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
    const originalEntry = config.entry;
    config.resolve.fallback = { fs: false };
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./helpers/polyfills.js')) {
        entries['main.js'].unshift('./helpers/polyfills.js');
      }

      return entries;
    };

    return config;
  },
});
