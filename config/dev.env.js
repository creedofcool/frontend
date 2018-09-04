module.exports = {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
 // BASE_API: '"https://api-dev"',
  BASE_API: '"/api"',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3333'
      }
    }
  }
}
