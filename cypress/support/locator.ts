// cypress/support/locator.ts
export const locator = (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
};