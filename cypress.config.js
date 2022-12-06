const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "t51c1g",
  retries: 1,
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
