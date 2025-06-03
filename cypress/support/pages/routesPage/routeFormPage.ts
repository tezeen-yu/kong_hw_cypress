import { Utils } from '../../../utils/utils';
import { locator } from '../../locator';
import { RoutesFormPageItems } from '../../../const/elements';

export class GatewayRouteFormPage {
    addSimpleRoute(routeName: string, protocolOptionValue: string, path: string): this {
        this.fillRouteName(routeName);
        this.chooseProtocol(protocolOptionValue);
        this.fillPath(path);
        return this;
    }

    save(): this {
        locator(RoutesFormPageItems.RoutesFormSubmit).click();
        // Wait for the form to be submitted and the page to reload
        cy.wait(1000);
        cy.get('body').then($body => {
            if ($body.find(Utils.getByTestId(RoutesFormPageItems.FormError)).length > 0) {
                throw new Error('Form submission failed due to validation errors. Please check the route form fields.');
            }
        });
        return this;
    }

    fillRouteName(routeName: string): this {
        locator(RoutesFormPageItems.GatewayRoutesNameInput)
            .clear()
            .type(routeName);
        return this;
    }

    chooseRelatedService(serviceID: string): this {
        locator(RoutesFormPageItems.RoutesServiceInput).click();
        locator(Utils.getDropdownItem(serviceID)).click();
        return this;
    }

    fillTags(tags: string): this {
        locator(RoutesFormPageItems.RoutesTagsInput)
            .clear()
            .type(tags);
        return this;
    }

    chooseProtocol(protocolOptionValue: string): this {
        locator(RoutesFormPageItems.RoutesProtocolsDropdown).click();
        locator(Utils.getDropdownItem(protocolOptionValue)).click();
        return this;
    }

    fillPath(path: string): this {
        locator(RoutesFormPageItems.RoutesPathInput)
            .clear()
            .type(path);
        return this;
    }

    expandAdvancedFields(): this {
        locator(RoutesFormPageItems.AdvancedFieldsExpandBtn).click();
        return this;
    }

    choosePathHandling(pathHandlingOptionValue: string): this {
        locator(RoutesFormPageItems.RoutesPathHandlingDropdown).click();
        locator(Utils.getDropdownItem(pathHandlingOptionValue)).click();
        return this;
    }
}