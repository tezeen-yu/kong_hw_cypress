import { GatewayServiceFormPage } from "../support/pages/gatewayServicesPage/gatewayServiceFormPage";
import { GatewayServicesPage } from "../support/pages/gatewayServicesPage/gatewayServicesPage";
import { GatewayRouteFormPage } from "../support/pages/routesPage/routeFormPage";
import { RoutesPage } from "../support/pages/routesPage/routesPage";
import { RouteData, ServiceData } from "../support/types";

export class AutomationHelper {
    public static prepareTestData_Three_Services() {
        cy.fixture('serviceData.json').then((services: ServiceData[]) => {
            services.forEach(({ serviceName, tags, url, advancedFields }) => {
                const gatewayServicesPage = new GatewayServicesPage();
                gatewayServicesPage
                    .visit()
                    .addGatewayService();

                const gatewayServiceFormPage = new GatewayServiceFormPage();
                gatewayServiceFormPage
                    .fillServiceName(serviceName)
                    .fillServiceTags(tags)
                    .fillFullURL(url)
                    .expandAdvancedFields()
                    .fillRetriesNumber(advancedFields.retries)
                    .save();
            });
        });
    }

    public static prepareTestData_Two_Routes() {
        cy.fixture('routeData.json').then((services: RouteData[]) => {
            services.forEach(({ routeName, tags, paths }) => {
                const routesPage = new RoutesPage();
                routesPage
                    .visit()
                    .addRoutes();

                const routesFormPage = new GatewayRouteFormPage();
                routesFormPage
                    .fillRouteName(routeName)
                    .fillTags(tags)
                    .fillPath(paths)
                    .save();
            });
        });
    }
}