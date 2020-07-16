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
    interval: 2000
  }
}