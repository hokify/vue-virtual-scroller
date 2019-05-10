import base from './rollup.config.base'
import { uglify } from 'rollup-plugin-uglify'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueVirtualScroller',
    file: 'dist/vue-virtual-scroller.min.js',
    format: 'iife',
    globals: {
      'vue': 'Vue',
    },
  },
})

config.plugins.push(uglify())

export default config
