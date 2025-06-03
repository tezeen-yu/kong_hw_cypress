import { GatewayServicesPage } from '../support/pages/gatewayServicesPage/gatewayServicesPage';
import { GatewayServiceFormPage } from '../support/pages/gatewayServicesPage/gatewayServiceFormPage';
import { generateRouteInfo, generateServiceInfo } from '../utils/testData';
import { RoutesProtocols, ServicesProtocols } from '../const/dropdownItemsTypes';
import { ServiceItemDetailsPage } from '../support/pages/gatewayServicesPage/gatewayServiceItemDetailsPage';
import { RoutesPage } from '../support/pages/routesPage/routesPage';
import { GatewayRouteFormPage } from '../support/pages/routesPage/routeFormPage';
import { RouteItemDetailsPage } from '../support/pages/routesPage/routeItemDetailsPage';
import { AutomationHelper } from '../utils/automationHelper';

describe('test case', () => {
    before(() => {
        if (Cypress.env('enableDocker')) {
            cy.startDocker();
        }  
    });

    it('kong - create new gateway service with a route', () => {
        // Generate random service and route data
        const {servicename, host} = generateServiceInfo();
        const {routename, path} = generateRouteInfo();
        // Open the Gateway Services page and add a new service
        const gatewayServicesPage = new GatewayServicesPage();
        gatewayServicesPage
            .visit()
            .addGatewayService();

        const gatewayServiceFormPage = new GatewayServiceFormPage();
        gatewayServiceFormPage
            .addSimpleServiceWithProtocol(servicename, ServicesProtocols.GPRC, host)
            .save();
        // After saving the service, the service details page will open
        const gatewayServiceItemDetailsPage = new ServiceItemDetailsPage();
        gatewayServiceItemDetailsPage
            .getServiceName().then((name) => {
                console.log(`Service Name: ${name}`);
                expect(name).to.equal(servicename);
            });
        gatewayServiceItemDetailsPage
            .getServiceID()
            .as('serviceId');
        // Add a route for the service
        gatewayServiceItemDetailsPage
            .gotoServiceRoutesPage()
            .addRoute();
        
        const routesFormPage = new GatewayRouteFormPage();
        routesFormPage
            .addSimpleRoute(routename, RoutesProtocols.HTTPHTTPS, path)
            .save();
        
        const routesPage = new RoutesPage();
        routesPage
            .visit()
            .openRoutesItemDetailsPage(routename);

        const routeItemDetailsPage = new RouteItemDetailsPage();
        routeItemDetailsPage
            .getRouteID()
            .as('routeId');
        // delete the route and service via API
        cy.get<string>('@routeId').then((routeId) => {
            cy.deleteById(routeId, Cypress.env('apiRoutesUrl'));
        });

        cy.get<string>('@serviceId').then((serviceId) => {
            cy.deleteById(serviceId, Cypress.env('apiServiceUrl'));
        });
    });

    it('kong - filter the servics and open a dedicated gateway service', () => {
        // Prepare test data with three services
        AutomationHelper.prepareTestData_Three_Services();

        const gatewayServicesPage = new GatewayServicesPage();
        const gatewayServiceItemDetailsPage = new ServiceItemDetailsPage();
        // Filter the services by name and enabled status
        gatewayServicesPage
            .visit()
            .filterBtnClick()
            .applyFilterOptions({ name: 'service_preTestData2', enabled: true });

        gatewayServicesPage.getServicesCount().then((count) => {
                expect(count).to.equal(1);
            });
        // Open the service details page for the filtered service
        gatewayServicesPage
            .visit()
            .openServiceItemDetailsPage("service_preTestData2");
        
        gatewayServiceItemDetailsPage
            .getServiceName().then((name) => {
                expect(name).to.equal("service_preTestData2");
            });
        
    });

    after(() => {
        cy.deleteRoutes();
        cy.deleteGatewayServices();
        if (Cypress.env('enableDocker')) {
            cy.endDocker();
        }
    });
});
