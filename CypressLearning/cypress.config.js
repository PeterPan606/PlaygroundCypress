const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: 'https://www.demoblaze.com/'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
