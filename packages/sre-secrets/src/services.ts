import { processEnvironments } from "./environments";

export type ServiceEnvironment = {
  fileName?: string;
  secretsName?: string;
  secrets: Record<string, string>;
};

export type Service = {
  name: string;
  environments: {
    dev: ServiceEnvironment;
    preprod: ServiceEnvironment;
    prod: ServiceEnvironment;
  };
};

export const processServices = ({ toPath }: { toPath: string }) => async (
  namespace: string,
  services: Service[]
) => {
  for (const service of services) {
    const { environments, name } = service;
    await processEnvironments({ toPath })(namespace, name, environments);
  }
};
