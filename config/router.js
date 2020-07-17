export default {
  loading: {
    color: '#644664'
  },
  router: {
    base: '/',
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/:section/:post',
        component: '~/pages/_slug.vue'
      })
    }
  }
}