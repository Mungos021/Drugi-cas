const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://gallery-app.vivifyideas.com/',
    env: {
      registeredUserEmail: "",
      validPassword: "",
      unregisteredUserEmail: "",
      passwordTooShort: ""
    }
  },
});
