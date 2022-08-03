import {
  getGrafanaLogsUrl,
  getGrafanaWorkloadsUrl,
  getRancherUrls,
  getGrafanaPodsUrl,
} from "./tools.js";

const summaryToText = (parsed) => {
  return `
### Ingresses

${parsed.hosts && parsed.hosts.map((host) => ` - 🚀 ${host}`).join("\n")}
${
  (parsed.redirects.length &&
    `
### Redirects

${parsed.redirects
  .map(({ from, to }) => ` - https://${from} ➡️ ${to}`)
  .join("\n")}
`) ||
  ""
}
### Docker images

${
  parsed.images &&
  parsed.images.map((image) => ` - 📦 docker pull ${image}`).join("\n")
}

### Debug

#### 📕 Loki logs for namespace ${parsed.namespace}:

${getGrafanaLogsUrl(parsed)}

#### 📈 Pods monitoring for namespace ${parsed.namespace}:

${getGrafanaPodsUrl(parsed)}

#### 📈 Workloads monitoring for namespace ${parsed.namespace}:

${getGrafanaWorkloadsUrl(parsed)}

#### 👮‍♂️ Rancher project ${parsed.namespace}:

${getRancherUrls(parsed)
  .map(({ name, url }) => ` - ${name} : ${url}`)
  .join("\n")}

`;
};

export default summaryToText;
