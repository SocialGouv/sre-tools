import {
  getGrafanaLogsUrl,
  getGrafanaWorkloadsUrl,
  getGrafanaPodsUrl,
} from "./tools.js";

const summaryToText = (parsed) => {
  return `
${
  (parsed.hosts.length &&
    `### Ingresses

${parsed.hosts && parsed.hosts.map((host) => ` - 🚀 ${host}`).join("\n")}`) ||
  ""
}
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
${
  (parsed.images.length &&
    `### Docker images

${
  parsed.images &&
  parsed.images.map((image) => ` - 📦 docker pull ${image}`).join("\n")
}`) ||
  ""
}

### Debug

#### 📕 Loki logs for namespace ${parsed.namespace}:

${getGrafanaLogsUrl(parsed)}

#### 📈 Pods monitoring for namespace ${parsed.namespace}:

${getGrafanaPodsUrl(parsed)}

#### 📈 Workloads monitoring for namespace ${parsed.namespace}:

${getGrafanaWorkloadsUrl(parsed)}

`;
};

export default summaryToText;
