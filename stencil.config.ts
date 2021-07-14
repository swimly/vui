import { Config } from '@stencil/core';
import {postcss} from '@stencil/postcss'
const postcssConfig = require('./postcss.config')

export const config: Config = {
  namespace: 'vui',
  devServer: {
    openBrowser: false,
    reloadStrategy: 'pageReload'
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: postcssConfig.plugins
    })
  ]
};
