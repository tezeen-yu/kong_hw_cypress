import { RoutesPageItems } from '../../../const/elements';
import { Utils } from '../../../utils/utils';
import { locator } from '../../locator';

export class RoutesPage {

    visit(): this{
        cy.visit(Cypress.env('routeUrl'));
        cy.wait(2000);
        cy.get('body').should('be.visible');
        return this;
    }

    addRoutes(): this{
        cy.get('body').then($body => {
            if ($body.find(Utils.getByTestId(RoutesPageItems.filterButton)).length > 0) {
                locator(RoutesPageItems.AddRoutes).click();
            } else {
                locator(RoutesPageItems.AddRoutesEmpty).click();
            }
        });
        return this;
    }

    getRoutesCount(): this {
        cy.get('table > tbody > tr').then($rows => {
            const rowCount = $rows.length;
            cy.log(`There are ${rowCount} routes in the routes page.`);
            return rowCount;
        });
        return this;
    }

    openRoutesItemDetailsPage(routesName: string): this {
        const rowSelector = Utils.getByTestId(routesName);
        const tdSelector = Utils.getByTestId('name');
        cy.get(`tr${rowSelector} td${tdSelector}`).click();
        return this;
    }

}