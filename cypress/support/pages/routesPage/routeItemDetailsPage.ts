import { RoutesItemDetailsPageItems } from '../../../const/elements';
import { Utils } from '../../../utils/utils';
import { locator } from '../../locator';

export class RouteItemDetailsPage {

    getRouteID(): Cypress.Chainable<string> {
        return locator(RoutesItemDetailsPageItems.RoutesID)
            .invoke('text')
            .then(text => {return text.replace('Copy ID', '').trim();});
    }


    getServiceName(): Cypress.Chainable<string> {
        return locator(RoutesItemDetailsPageItems.ServiceName)
            .invoke('text')
            .then(text => text.trim());
    }

    gotoServicePluginsPage(): this {
        locator(RoutesItemDetailsPageItems.Plugins).click();
        return this;
    }

}