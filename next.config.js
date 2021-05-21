const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra({
  env: {
    api_url: process.env.API_URL
  }
})
