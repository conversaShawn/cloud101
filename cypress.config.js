const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "22r1n9",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
