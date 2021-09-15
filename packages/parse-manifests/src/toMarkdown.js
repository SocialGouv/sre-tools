import parseManifests from "./index.js";
import {
  getGrafanaLogsUrl,
  getGrafanaWorkloadsUrl,
  getRancherUrl,
  getGrafanaPodsUrl,
} from "./tools.js";

const toMarkdown = (manifests) => {
  const parsed = parseManifests(manifests);

  return `
<details>
  <summary>Ingresses</summary>

${parsed.hosts.map((host) => ` - 🚀 [${host}](https://${host})`).join("\n")}

</details>


${
  parsed.redirects.length &&
  `### Redirects

${parsed.redirects
  .map(({ from, to }) => ` - https://${from} ➡️ ${to}`)
  .join("\n")}
`
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
 - [👮‍♂️ Rancher project ${parsed.namespace}](${getRancherUrl(parsed)})

   </summary>
</details>
`;
};

export default toMarkdown;
