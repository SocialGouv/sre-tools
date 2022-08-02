import {
  getGrafanaLogsUrl,
  getGrafanaWorkloadsUrl,
  getRancherUrls,
  getGrafanaPodsUrl,
} from "./tools.js";

const summaryToMarkdown = (parsed) => {
  return `
<details>
  <summary>Ingresses</summary>

${parsed.hosts.map((host) => ` - 🚀 [${host}](${host})`).join("\n")}

</details>
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
<details>
  <summary>Docker images</summary>

${parsed.images.map((image) => ` - 📦 docker pull ${image}`).join("\n")}

</details>

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
${getRancherUrls(parsed)
  .map(({ name, url }) => ` - [👮‍♂️ ${name}](${url})`)
  .join("\n")}

</details>
`;
};

export default summaryToMarkdown;
