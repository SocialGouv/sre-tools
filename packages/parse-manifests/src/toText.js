import parseManifests from "./index.js";

import {
  getGrafanaLogsUrl,
  getGrafanaWorkloadsUrl,
  getRancherUrl,
  getGrafanaPodsUrl,
} from "./tools.js";

const toText = (manifests) => {
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

export default toText;
