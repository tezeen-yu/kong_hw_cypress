// cypress/support/types.ts
export interface ServiceData {
  serviceName: string;
  tags: string;
  url: string;
  advancedFields: {
    retries: number;
    timeout: number;
  };
}

export interface RouteData {
  routeName: string;
  tags: string;
  paths: string;
}

export type ServiceFilterOptions = {
  name?: string;
  enabled?: boolean;
  protocol?: string;
  host?: string;
  port?: number;
  path?: string;
}