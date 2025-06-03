import { filter } from "cypress/types/bluebird";

export const SideMenuItems = {
    Overview: 'sidebar-item-overview',
    GatewayServices: 'sidebar-item-gateway-services',
    Routes: 'sidebar-item-routes',
    Consumers: 'sidebar-item-consumers',
    Plugins: 'sidebar-item-plugins',
    RedisConfigurations: 'sidebar-item-redis-configurations',
    Upstreams: 'sidebar-item-upstreams',
    Certificates: 'sidebar-item-certificates',
    SNIs: 'sidebar-item-snis',
    Keys: 'sidebar-item-keys',
    Vaults: 'sidebar-item-vaults',
};

export const ServicesPageItems = {
    AddGatewayServiceEmpty: 'empty-state-action',
    AddGatewayService: 'toolbar-add-gateway-service',
    filterButton: 'filter-button',
    applyFilters: '[data-testid="name"] > .menu-item-buttons > [data-testid="apply-filter"]',
    cancelFilters: 'cancel-filter',
    filterName: '[data-testid="name"] > .menu-item-title',
    filterNameInputBox: '#filter-name',
    filterEnabled: '[data-testid="enabled"] > .menu-item-title',
    enabledSelectInput: '[data-testid="enabled"] [data-testid="select-input"]',
    enabledSelectItemTrue: '[data-testid="select-item-true"] > .select-item-container > button > .select-item-label',
    enabledSelectItemFalse: '[data-testid="select-item-false"] > .select-item-container > button > .select-item-label',
    filterProtocol: 'protocol',
    filterHost: 'host',
    filterPort: 'port',
    filterPath: 'path',
    clearAllFilters: '.filter-clear-button-container > .k-button',
};

export const ServicesFormPageItems = {
    GatewayServiceNameInput: 'gateway-service-name-input',
    GatewayServiceTagsInput: 'gateway-service-tags-input',
    GatewayServiceURLRadioBtn: 'gateway-service-url-radio',
    GatewayServiceFullURLinput: 'gateway-service-url-input',
    GatewayServiceProtocolRadioBtn: 'gateway-service-protocol-radio',
    GatewayServiceProtocolSSelect: 'gateway-service-protocol-select',
    GatewayServiceHostInput: 'gateway-service-host-input',
    AdvancedFieldsExpandBtn: 'collapse-trigger-content',
    GatewayServiceRetriesInput: 'gateway-service-retries-input',
    GatewayServiceFormSubmit: 'service-create-form-submit',
    GatewayServiceFormCancel: 'service-create-form-cancel',
    FormError: 'form-error',
};

export const ServiceItemDetailsPageItems = {
    Configuration: 'show-service',
    Routes: 'service-routes',
    Plugins: 'service-plugins',
    Document: 'service-documents',
    ServiceID: 'id-copy-uuid',
    ServiceName: 'name-property-value',
    AddRoutesBtnEmpty: 'empty-state-action',
    AddRouteBtn: 'toolbar-add-route',
};

export const RoutesPageItems = {
    AddRoutesEmpty: 'empty-state-action',
    AddRoutes: 'toolbar-add-route',
    filterButton: 'filter-button',
};

export const RoutesFormPageItems = {
    GatewayRoutesNameInput: 'route-form-name',
    RoutesServiceInput: 'route-form-service-id',
    RoutesTagsInput: 'route-form-tags',
    RoutesProtocolsDropdown: 'route-form-protocols',
    RoutesPathInput: 'route-form-paths-input-1',
    AdvancedFieldsExpandBtn: 'collapse-trigger-content',
    RoutesPathHandlingDropdown: 'route-form-path-handling',
    RoutesFormSubmit: 'route-create-form-submit',
    RoutesFormCancel: 'route-create-form-cancel',
    FormError: 'form-error',
};

export const RoutesItemDetailsPageItems = {
    Configuration: 'show-route',
    Plugins: 'route-plugins',
    RoutesID: 'id-copy-uuid',
    ServiceName: 'service-property-value',
    AddPluginsBtnEmpty: 'empty-state-action',
};