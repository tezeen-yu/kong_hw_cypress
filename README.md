# kong_hw_cypress

End-to-end (E2E) automation tests for Kong Manager using Cypress and TypeScript.

## Overview

This project provides Cypress-based E2E tests for validating the Kong Manager UI and API. It supports running tests locally and in CI environments, with Docker integration for test environment setup.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)
- Docker (for running Kong services locally)
- Kong Gateway image (used in Docker Compose)

## Installation

1. Install dependencies:
   ```sh
   npm install
   ```

## Project Structure

- `cypress/` - Cypress tests, page objects, utilities, and fixtures
- `reports/` - Test result reports (JUnit XML, Allure, etc.)
- `docker-compose.yml` - Docker Compose file for local Kong environment
- `.github/workflows/` - GitHub Actions CI configuration

## Scripts

- Run all E2E tests with reports:
  ```sh
  npm run test:ci
  ```

- Open Cypress interactive runner:
  ```sh
  npm run cy:open
  ```

- Run tests in Chrome:
  ```sh
  npm run e2e:chrome
  ```

- Run only gateway service tests:
  ```sh
  npm run runService
  ```

- Run only route tests:
  ```sh
  npm run runRoute
  ```

- Generate Allure report:
  ```sh
  npm run allure:report
  ```

- Open Allure report:
  ```sh
  npm run allure:open
  ```

## Usage

1. (Optional) Start Kong services with Docker:
   ```sh
   docker-compose up -d
   ```
   Or let Cypress start/stop Docker automatically (default).

2. Run the desired test script as shown above.

3. View test reports in the `reports/` directory or open Allure reports.

## Configuration

- Cypress configuration: [`kong_hw_cypress/cypress.config.ts`](kong_hw_cypress/cypress.config.ts )
- TypeScript configuration: [`kong_homework/tsconfig.json`](kong_homework/tsconfig.json )
- Docker Compose: [`docker-compose.yml`](docker-compose.yml )

## Continuous Integration

GitHub Actions workflow is defined in [`kong_hw_cypress/.github/workflows/cypress-e2e.yml`](kong_hw_cypress/.github/workflows/cypress-e2e.yml ) for automated test runs and report uploads.

## License

ISC

---

Author: Dan Yu <dandanyu1987@163.com>