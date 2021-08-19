#!/usr/bin/env node

import getStdin from "get-stdin";

import parseManifests from "../index.js";

const GRAFANA_URL =
  process.env.GRAFANA_URL || "https://grafana.fabrique.social.gouv.fr";

const usage = () => {
  console.error("Usage: cat manifests.yml | parse-manifests [--json|markdown]");
};

const getOutputFormat = () => {
  const option =
    process.argv.length >= 2
      ? process.argv[process.argv.length - 1].replace(/^--/, "")
      : "json";
  return option || "json";
};

const getGrafanaLogsUrl = (parsed) => {
  const namespace = parsed.namespace;
  return `${GRAFANA_URL}/explore?orgId=1&left=%5B%22now-6h%22,%22now%22,%22Loki-tail%22,%7B%22expr%22:%22%7Bnamespace%3D%5C%22${namespace}%5C%22%7D%22%7D%5D`;
};

const getGrafanaPodsUrl = (parsed) => {
  const namespace = parsed.namespace;
  const cluster = parsed.isProduction ? "prod2" : "dev2";
  return `${GRAFANA_URL}/d/85a562078cdf77779eaa1add43ccec1e/kubernetes-compute-resources-namespace-pods?orgId=1&refresh=10s&var-datasource=default&var-cluster=${cluster}&var-namespace=${namespace}`;
};

const getGrafanaWorkloadsUrl = (parsed) => {
  const namespace = parsed.namespace;
  const cluster = parsed.isProduction ? "prod2" : "dev2";
  return `${GRAFANA_URL}/d/a87fb0d919ec0ea5f6543124e16c42a5/kubernetes-compute-resources-namespace-workloads?orgId=1&refresh=10s&var-datasource=default&var-cluster=${cluster}&var-namespace=${namespace}&var-type=deployment`;
};

const getRancherUrl = (parsed) => {
  const projectId = process.env.RANCHER_PROJECT_ID || "";
  return `https://rancher.fabrique.social.gouv.fr/p/${projectId}/workloads`;
};

const toMarkdown = (manifests) => {
  const parsed = parseManifests(manifests);

  return `
### Ingresses

${parsed.hosts.map((host) => ` - 🚀 https://${host}`).join("\n")}

### Docker images

${parsed.images.map((image) => ` - 📦 docker pull ${image}`).join("\n")}

### Debug

#### 📕 Loki logs for namespace ${parsed.namespace}:

${getGrafanaLogsUrl(parsed)}

#### 📈 Pods monitoring for namespace ${parsed.namespace}:

 ${getGrafanaPodsUrl(parsed)}

#### 📈 Workloads monitoring for namespace ${parsed.namespace}:

 ${getGrafanaWorkloadsUrl(parsed)}

#### 👮‍♂️ Rancher project ${parsed.namespace}:

 ${getRancherUrl(parsed)}

`;
};

if (process.argv.length < 2) {
  usage();
  throw new Error("parse-manifests need some YAML input");
}
(async () => {
  const input = await getStdin();
  const format = getOutputFormat();
  try {
    if (input) {
      if (format === "markdown") {
        const markdown = toMarkdown(input);
        console.log(markdown);
        return;
      }
      console.log(JSON.stringify(parseManifests(input), null, 2));
    } else {
      usage();
    }
  } catch (e) {
    console.error(
      "Error: cannot parse input; parse-manifests only support YAML input"
    );
    console.error(e);
  }
})();
