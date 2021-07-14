const pkg = require('./package.json')
const functions = {
  v (string) {
    const arr = string.split('-')
    const name = arr[0]
    const value = arr[1]
    return pkg.var ? `var(--${name}-${value}, $${name}-${value})` : `$${name}-${value}`
  }
}

let plugins = [
  require('postcss-prepend-imports')({
    path:  `./src/themes/default`,
    files: [`index.css`]
  }),
  require('postcss-import'),
  require('postcss-functions')({
    functions
  }),
  require('postcss-nested')(),
  require('postcss-pxtorem')({
    rootValue: 20,
    propList: ['*', '!border'],
    replace: true,
    mediaQuery: false,
    minPixelValue: 0,
    exclude:/node_module/i
  }),
  require('autoprefixer')({
    overrideBrowserslist: [
      'ios 7',
      '>1%',
      'last 2 version'
    ]
  }),
  require('postcss-simple-vars')()
]
module.exports = {
  plugins
}