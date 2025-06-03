import { generateRouteInfo } from '../utils/testData';
import { RoutesProtocols } from '../const/dropdownItemsTypes';
import { RoutesPage } from '../support/pages/routesPage/routesPage';
import { GatewayRouteFormPage } from '../support/pages/routesPage/routeFormPage';
import { AutomationHelper } from '../utils/automationHelper';

describe('test case', () => {
    before(() => {
        if (Cypress.env('enableDocker')) {
            cy.startDocker();
        }
        cy.viewport(1920, 1080);
        AutomationHelper.prepareTestData_Two_Routes();
    });

    it('kong - create a new route', () => {
        const { routename, path } = generateRouteInfo();

        const routesPage = new RoutesPage();
        routesPage
            .visit()
            .addRoutes();

        const routesFormPage = new GatewayRouteFormPage();
        routesFormPage
            .addSimpleRoute(routename, RoutesProtocols.HTTPHTTPS, path)
            .save();

        routesPage
            .visit()
            .openRoutesItemDetailsPage(routename);
    });

    after(() => {
        cy.deleteRoutes();
        cy.deleteGatewayServices();
        if (Cypress.env('enableDocker')) {
            cy.endDocker();
        }    
    });
});
