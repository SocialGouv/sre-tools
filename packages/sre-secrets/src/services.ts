import { processEnvironments } from "./environments";

export interface ServiceEnvironment {
  fileName?: string;
  secretsName?: string;
  secrets: Record<string, string>;
}

export interface Service {
  name: string;
  environments: {
    dev: ServiceEnvironment;
    preprod: ServiceEnvironment;
    prod: ServiceEnvironment;
  };
}

export const processServices =
  ({ toPath }: { toPath: string }) =>
  async (namespace: string, services: Service[]): Promise<void> => {
    for (const service of services) {
      const { environments, name } = service;
      await processEnvironments({ toPath })(namespace, name, environments);
    }
  };
