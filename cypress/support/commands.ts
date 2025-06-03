export { }; // Ensure this file is treated as a module
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to delete a gateway service by its UUID.
             * @param serviceID The serviceID of the service to delete.
             * @example cy.deleteGatewayServiceById('1234-5678-90ab-cdef')
             */
            deleteById(id: string, url: string): Cypress.Chainable<any>;
            getAllIDs(url: string): Cypress.Chainable<string[]>;
            deleteGatewayServices(): Cypress.Chainable<void>;
            deleteRoutes(): Cypress.Chainable<void>;
            startDocker(): Cypress.Chainable<void>;
            endDocker(): Cypress.Chainable<void>;
        }
    }
}

Cypress.Commands.add('deleteById', (id: string, url: string): Cypress.Chainable<any> => {
    return cy.request({
        method: 'DELETE',
        url: `${url}/${id}`,
        failOnStatusCode: false,
    }).then((response) => {
        if (response.status === 200 || response.status === 204) {
            console.log(`Deleted ${id} successfully.`);
        } else {
            throw new Error(`Failed to delete ${id}. Status: ${response.status}`);
        }
        return response;
    });
});

Cypress.Commands.add('getAllIDs', (url: string): Cypress.Chainable<string[]> => {
    return cy.request('GET', url).then((response) => {
        expect(response.status).to.eq(200);
        const ids: string[] = response.body.data.map((service: any) => service.id);
        return ids;
    });
});

Cypress.Commands.add('deleteGatewayServices', () => {
    cy.getAllIDs(Cypress.env('apiServiceUrl')).then((serviceIds) => {
        serviceIds.map((id) => cy.deleteById(id, Cypress.env('apiServiceUrl')));
    });
});

Cypress.Commands.add('deleteRoutes', () => {
    cy.getAllIDs(Cypress.env('apiRoutesUrl')).then((routesIds) => {
        routesIds.map((id) => cy.deleteById(id, Cypress.env('apiRoutesUrl')));
    });
});

Cypress.Commands.add('startDocker', () => {
    cy.log('Starting Docker containers...');
    cy.exec("docker-compose up -d", { timeout: 180000 }).then(() => cy.wait(5000));
    cy.log('Docker containers started.');
});

Cypress.Commands.add('endDocker', () => {
    cy.log('Stopping Docker containers...');
    cy.exec("docker-compose down", { failOnNonZeroExit: false });
    cy.log('Docker containers stopped.');
});