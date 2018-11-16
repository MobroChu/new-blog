'use strict'

const utils = require('../build/utils')


module.exports = {
  'vue$': 'vue/dist/vue.esm.js',
  '@': utils.resolve('src'),
  '@components': utils.resolve('src/components'),
  '@assets': utils.resolve('src/assets')
}
