import { Utils } from '../../../utils/utils';
import { locator } from '../../locator';
import { ServicesFormPageItems } from '../../../const/elements';
import { ServicesProtocols } from '../../../const/dropdownItemsTypes';

export class GatewayServiceFormPage {
    addSimpleServiceWithFullURL(serviceName: string, fullURL: string): this {
        this.fillServiceName(serviceName);
        this.fillFullURL(fullURL);
        return this;
    }

    addSimpleServiceWithProtocol(serviceName: string, protocol: string, host: string): this {
        this.fillServiceName(serviceName);
        this.chooseProtocolRadioBtn();
        this.selectProtocol(protocol);
        this.fillHost(host);
        return this;
    }

    save(): this {
        locator(ServicesFormPageItems.GatewayServiceFormSubmit).click();
        // Wait for the form to be submitted and the page to reload
        cy.wait(1000);
        cy.get('body').then($body => {
            if ($body.find(Utils.getByTestId(ServicesFormPageItems.FormError)).length > 0) {
                throw new Error('Form submission failed due to validation errors. Please check the service form fields.');
            }
        });
        return this;
    }

    fillServiceName(serviceName: string): this {
        locator(ServicesFormPageItems.GatewayServiceNameInput)
            .clear()
            .type(serviceName);
        return this;
    }

    fillServiceTags(tags: string): this {
        locator(ServicesFormPageItems.GatewayServiceTagsInput)
            .clear()
            .type(tags);
        return this;
    }

    fillFullURL(fullURL: string): this {
        locator(ServicesFormPageItems.GatewayServiceFullURLinput)
            .clear()
            .type(fullURL);
        return this;
    }

    chooseProtocolRadioBtn(): this {
        locator(ServicesFormPageItems.GatewayServiceProtocolRadioBtn).click();
        return this;
    }

    selectProtocol(protocol: string): this {
        locator(ServicesFormPageItems.GatewayServiceProtocolSSelect).click();
        locator(Utils.getDropdownItem(protocol)).click();
        return this;
    }

    fillHost(host: string): this {
        locator(ServicesFormPageItems.GatewayServiceHostInput)
            .clear()
            .type(host);
        return this;
    }

    expandAdvancedFields(): this {
        locator(ServicesFormPageItems.AdvancedFieldsExpandBtn).click();
        return this;
    }

    fillRetriesNumber(retries: number): this {
        locator(ServicesFormPageItems.GatewayServiceRetriesInput)
            .clear()
            .type(retries.toString());
        return this;
    }
}