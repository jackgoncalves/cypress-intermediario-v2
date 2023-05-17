const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false, // deletando a pasta fixture e dizendo q nao vai ser utilizada
  video: false,
})
