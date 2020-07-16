import build from './config/build'
import head from './config/head'
import modules from './config/modules'
import buildModules from './config/buildModules'
import router from './config/router'

export default {
  target: 'static',
  mode: 'universal',
  srcDir: './src/',
  ...build,
  ...head,
  ...buildModules,
  ...modules,
  ...router,
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content().only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  }
}