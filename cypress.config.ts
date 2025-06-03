import { defineConfig } from "cypress";
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    execTimeout: 120000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      serviceUrl: "http://localhost:8002/default/services",
      routeUrl: "http://localhost:8002/default/routes",
      apiServiceUrl: "http://localhost:8001/default/services",
      apiRoutesUrl: "http://localhost:8001/default/routes",
      enableDocker: true,
    }
  },
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'reports/test-results-[hash].xml',
    toConsole: true,
    attachments: true
  },
  video: true,
  screenshotOnRunFailure: true,
});