import {
  getGrafanaLogsUrl,
  getGrafanaWorkloadsUrl,
  getGrafanaPodsUrl,
  getGrafanaCnpgUrls,
} from "./tools.js";

const summaryToMarkdown = (parsed) => {
  return `
${
  (parsed.hosts.length &&
    `<details>
  <summary>Ingresses</summary>

${parsed.hosts.map((host) => ` - 🚀 [${host}](${host})`).join("\n")}

</details>`) ||
  ""
}
${
  (parsed.redirects.length &&
    `
<details>
  <summary>Redirects</summary>

${parsed.redirects
  .map(({ from, to }) => ` - https://${from} ➡️ ${to}`)
  .join("\n")}

</details>
`) ||
  ""
}
${
  (parsed.images.length &&
    `<details>
  <summary>Docker images</summary>

${parsed.images.map((image) => ` - 📦 docker pull ${image}`).join("\n")}

</details>`) ||
  ""
}

<details>
  <summary>Debug</summary>

 - [📕 Loki logs for namespace ${parsed.namespace}](${getGrafanaLogsUrl(
    parsed
  )})
 - [📈 Pods monitoring for namespace ${parsed.namespace}](${getGrafanaPodsUrl(
    parsed
  )})
 - [📈 Workloads monitoring for namespace ${
   parsed.namespace
 }](${getGrafanaWorkloadsUrl(parsed)})
${getGrafanaCnpgUrls(parsed)
  .map((cluster) => ` - [🐘 CNPG ${cluster.name}](${cluster.url})`)
  .join("\n")}
</details>
`;
};

export default summaryToMarkdown;
