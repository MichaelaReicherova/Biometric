const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.biometric.sk',
    screenshotOnRunFailure: true,
    video: false,

    setupNodeEvents(on, config) {
      config.env = require('./cypress/fixtures/cypress.env.json');

      return config;
    },
  },
});