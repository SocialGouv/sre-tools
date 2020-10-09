import { processEnvironments } from "./environments"

export const processServices = async (namespace, services) => {
  for (const service of services) {
    const { environments, name } = service
    await processEnvironments(namespace, name, environments)
  }
}
