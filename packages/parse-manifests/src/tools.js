const DEFAULT_GRAFANA_URL =
  process.env.PROVIDER === "ovh"
    ? "https://grafana-ovh.fabrique.social.gouv.fr"
    : "https://grafana.fabrique.social.gouv.fr";

const DEFAULT_GRAFANA_WORKLOADS_D =
  process.env.PROVIDER === "ovh"
    ? "a164a7f0339f99e89cea5cb47e9be617V2"
    : "m_UCAGgIz";

const DEFAULT_GRAFANA_WORKLOADS_VAR_DATASOURCE =
  process.env.PROVIDER === "ovh"
    ? "eb239be0-0ac2-41d5-9e1a-061f951a07a3"
    : "default";

const DEFAULT_GRAFANA_PODS_D =
  process.env.PROVIDER === "ovh"
    ? "a7df53d7-0696-4e00-821b-c56b66e5c20a"
    : "dRAC0MRIz";

const DEFAULT_GRAFANA_PODS_VAR_DATASOURCE =
  process.env.PROVIDER === "ovh" ? "P5DCFC7561CCDE821" : "default";

const GRAFANA_WORKLOADS_D =
  process.env.GRAFANA_WORKLOADS_D ||
  DEFAULT_GRAFANA_WORKLOADS_D;

const GRAFANA_WORKLOADS_VAR_DATASOURCE =
  process.env.GRAFANA_WORKLOADS_VAR_DATASOURCE ||
  DEFAULT_GRAFANA_WORKLOADS_VAR_DATASOURCE;

const GRAFANA_PODS_D = process.env.GRAFANA_PODS_D || DEFAULT_GRAFANA_PODS_D;

const GRAFANA_PODS_VAR_DATASOURCE =
  process.env.GRAFANA_PODS_VAR_DATASOURCE ||
  DEFAULT_GRAFANA_PODS_VAR_DATASOURCE;


const DEV_CLUSTER_NAME =
  process.env.PROVIDER === "ovh" ? "ovh-dev" : DEV_CLUSTER_NAME;

const PROD_CLUSTER_NAME =
  process.env.PROVIDER === "ovh" ? "ovh-prod" : PROD_CLUSTER_NAME;

const GRAFANA_URL = process.env.GRAFANA_URL || DEFAULT_GRAFANA_URL;

const RANCHER_URL =
  process.env.RANCHER_URL || "https://rancher.fabrique.social.gouv.fr";

export const getGrafanaLogsUrl = (parsed) => {
  const namespace = parsed.namespace;
  return `${GRAFANA_URL}/explore?orgId=1&left=%5B%22now-6h%22,%22now%22,%22Loki%22,%7B%22expr%22:%22%7Bnamespace%3D%5C%22${namespace}%5C%22%7D%22%7D%5D`;
};

export const getGrafanaPodsUrl = (parsed) => {
  const namespace = parsed.namespace;
  const cluster = parsed.isProduction ? PROD_CLUSTER_NAME : DEV_CLUSTER_NAME;
  return `${GRAFANA_URL}/d/${GRAFANA_PODS_D}/kubernetes-compute-resources-namespace-pods?orgId=1&refresh=10s&var-datasource=${GRAFANA_PODS_VAR_DATASOURCE}&var-cluster=${cluster}&var-namespace=${namespace}`;
};

export const getGrafanaCnpgUrls = (parsed) => {
  const namespace = parsed.namespace;
  return parsed.manifests
    .filter(
      (m) => m.apiVersion === "postgresql.cnpg.io/v1" && m.kind == "Cluster"
    )
    .map((cluster) => ({
      name: cluster.name,
      namespace,
      url: `${GRAFANA_URL}/d/z7FCA4Nn1/cloudnativepg?orgId=1&refresh=30s&var-DS_PROMETHEUS=default&var-namespace=${namespace}&var-cluster=${cluster.name}&var-instances=All`,
    }));
};

export const getGrafanaWorkloadsUrl = (parsed) => {
  const namespace = parsed.namespace;
  const cluster = parsed.isProduction ? PROD_CLUSTER_NAME : DEV_CLUSTER_NAME;
  return `${GRAFANA_URL}/d/${GRAFANA_WORKLOADS_D}/kubernetes-compute-resources-namespace-workloads?orgId=1&refresh=10s&var-datasource=${GRAFANA_WORKLOADS_VAR_DATASOURCE}&var-cluster=${cluster}&var-namespace=${namespace}&var-type=deployment`;
};

export const getRancherUrls = (parsed) => {
  const projectId =
    parsed.rancherProjectId || process.env.RANCHER_PROJECT_ID || "";
  const clusterId = projectId.split(":")[0];
  if (projectId) {
    return [
      {
        name: `Namespace rancher ${parsed.namespace}`,
        url: `${RANCHER_URL}/dashboard/c/${clusterId}/explorer/namespace/${parsed.namespace}`,
        legacyUrl: `${RANCHER_URL}/p/${projectId}/workloads`,
      },
      ...((parsed.deployments &&
        parsed.deployments.map((deployment) => ({
          name: `Deployment ${deployment.name}`,
          url: `${RANCHER_URL}/dashboard/c/${clusterId}/explorer/apps.deployment/${parsed.namespace}/${deployment.name}`,
          legacyUrl: `${RANCHER_URL}/p/${projectId}/workload/deployment:${parsed.namespace}:${deployment.name}`,
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
