import { ServiceItemDetailsPageItems } from '../../../const/elements';
import { Utils } from '../../../utils/utils';
import { locator } from '../../locator';

export class ServiceItemDetailsPage {

    getServiceID(): Cypress.Chainable<string> {
        return locator(ServiceItemDetailsPageItems.ServiceID)
            .invoke('text')
            .then(text => {return text.replace('Copy ID', '').trim();});
    }


    getServiceName(): Cypress.Chainable<string> {
        return locator(ServiceItemDetailsPageItems.ServiceName)
            .invoke('text')
            .then(text => text.trim());
    }

    gotoServiceRoutesPage(): this {
        locator(ServiceItemDetailsPageItems.Routes).click();
        return this;
    }

    gotoServicePluginsPage(): this {
        locator(ServiceItemDetailsPageItems.Plugins).click();
        return this;
    }

    addRoute(): this {
        cy.get('body').then($body => {
            if ($body.find('.alert-message').length > 0) {
                locator(ServiceItemDetailsPageItems.AddRoutesBtnEmpty).click();
            } else {
                locator(ServiceItemDetailsPageItems.AddRouteBtn).click();
            }
        });
        return this;
    }
}