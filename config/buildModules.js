export default {
  buildModules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    meta: {
      mobileApp: false,
      name: 'Valley Puppy',
      author: 'Frances & Cole',
      theme_color: '#644664'
    },
    manifest: {
      name: 'Valley Puppy',
      lang: 'en',
      theme_color: '#644664',
      crossorigin: 'use-credentials'
    }
  },
}