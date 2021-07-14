import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import pug from 'rollup-plugin-pug'
import babel from 'rollup-plugin-babel'
const postcssConfig = require('./postcss.config')
export default () => {
  return {
    input: `./src/main.ts`,
    output: [{
      file: `./libs/vui.js`,
      format: 'umd',
      name: 'vui'
    }],
    plugins: [
      json(),
      resolve(),
      commonjs(),
      typescript({
        exclude: ['node_modules/**']
      }),
      pug(),
      postcss({
        extract: true,
        plugins: postcssConfig.plugins
      }),
      babel({
        exclude: [/\/core-js/],
        runtimeHelpers: true,
        extensions: ['.ts'],
        presets: [
          ['@babel/env', {
            modules: false,
            useBuiltIns: 'usage',
            corejs: 2,
            forceAllTransforms: true
          }]
        ]
      })
    ]
  }
}