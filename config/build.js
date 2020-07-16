export default {
  modern: process.env.NODE_ENV === 'development' ? false : 'server',
  build: {
    extractCSS: ({ isDev }) => !isDev,
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator'
      ]
    },
    
  }
}