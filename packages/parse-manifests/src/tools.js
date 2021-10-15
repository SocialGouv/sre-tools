const GRAFANA_URL =
  process.env.GRAFANA_URL || "https://grafana.fabrique.social.gouv.fr";

const RANCHER_URL =
  process.env.RANCHER_URL || "https://rancher.fabrique.social.gouv.fr";

export const getGrafanaLogsUrl = (parsed) => {
  const namespace = parsed.namespace;
  return `${GRAFANA_URL}/explore?orgId=1&left=%5B%22now-6h%22,%22now%22,%22Loki-tail%22,%7B%22expr%22:%22%7Bnamespace%3D%5C%22${namespace}%5C%22%7D%22%7D%5D`;
};

export const getGrafanaPodsUrl = (parsed) => {
  const namespace = parsed.namespace;
  const cluster = parsed.isProduction ? "prod2" : "dev2";
  return `${GRAFANA_URL}/d/85a562078cdf77779eaa1add43ccec1e/kubernetes-compute-resources-namespace-pods?orgId=1&refresh=10s&var-datasource=default&var-cluster=${cluster}&var-namespace=${namespace}`;
};

export const getGrafanaWorkloadsUrl = (parsed) => {
  const namespace = parsed.namespace;
  const cluster = parsed.isProduction ? "prod2" : "dev2";
  return `${GRAFANA_URL}/d/a87fb0d919ec0ea5f6543124e16c42a5/kubernetes-compute-resources-namespace-workloads?orgId=1&refresh=10s&var-datasource=default&var-cluster=${cluster}&var-namespace=${namespace}&var-type=deployment`;
};

export const getRancherUrls = (parsed) => {
  const projectId = process.env.RANCHER_PROJECT_ID || "";
  if (projectId) {
    return [
      {
        name: `Project rancher ${parsed.namespace}`,
        url: `${RANCHER_URL}/p/${projectId}/workloads`,
      },
      ...((parsed.deployments &&
        parsed.deployments.map((deployment) => ({
          name: `Deployment ${deployment.name}`,
          url: `${RANCHER_URL}/p/${projectId}/workload/deployment:${parsed.namespace}:${deployment.name}`,
        }))) ||
        []),
    ];
  }
  return [
    {
      name: `Project rancher ${parsed.namespace}`,
      url: RANCHER_URL,
    },
  ];
};
