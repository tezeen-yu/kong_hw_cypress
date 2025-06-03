import { ServicesPageItems } from '../../../const/elements';
import { Utils } from '../../../utils/utils';
import { locator } from '../../locator';
import { ServiceFilterOptions } from '../../types';

export class GatewayServicesPage {

    visit(): this {
        cy.visit(Cypress.env('serviceUrl'));
        cy.wait(500);
        cy.get('body').should('be.visible');
        return this;
    }

    addGatewayService(): this {
        cy.get('body').then($body => {
            if ($body.find(Utils.getByTestId(ServicesPageItems.filterButton)).length > 0) {
                locator(ServicesPageItems.AddGatewayService).click();
            } else {
                locator(ServicesPageItems.AddGatewayServiceEmpty).click();
            }
        });
        return this;
    }

    getServicesCount(): Cypress.Chainable<number> {
        return cy.get('table > tbody > tr').then($rows => $rows.length);
    }

    openServiceItemDetailsPage(serviceName: string): this {
        const rowSelector = Utils.getByTestId(serviceName);
        const tdSelector = Utils.getByTestId('name');
        cy.get(`tr${rowSelector} td${tdSelector}`).click();
        return this;
    }

    filterBtnClick(): this {
        locator(ServicesPageItems.filterButton).click();
        return this;
    }

    applyFilterOptions(filters: ServiceFilterOptions): this {

        if (filters.name) {
            cy.get(ServicesPageItems.filterName)
                .click();
            cy.get(ServicesPageItems.filterNameInputBox)
                .type(filters.name);
        }

        if (typeof filters.enabled === 'boolean') {
            cy.get(ServicesPageItems.filterEnabled)
                .click();
            cy.get(ServicesPageItems.enabledSelectInput)
                .click()
                .should('be.visible');
            cy.get(filters.enabled ? (ServicesPageItems.enabledSelectItemTrue) : (ServicesPageItems.enabledSelectItemFalse))
                .click();
        }

        if (filters.protocol) {
            // need to implement protocol filter
        }

        if (filters.host) {
            // need to implement host filter
        }

        if (typeof filters.port === 'number') {
            // need to implement port filter
        }

        if (filters.path) {
            // need to implement path filter
        }

        // click apply button, asuming the name option filter is always present
        cy.get(ServicesPageItems.applyFilters).click();
        cy.wait(2000);
        return this;
    }

    clearAllFilters(): this {
        cy.get(ServicesPageItems.clearAllFilters).click();
        return this;
    }
}