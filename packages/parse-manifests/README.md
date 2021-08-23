# @socialgouv/parse-manifests

Extract basic informations from a bunch of kubernetes manifests

## Usage

### Bin

```sh
cat manifests.yml | parse-manifests [--json|markdown|text]
```

### Module

```js
import fs from "fs";
import parseManifests from "@socialgouv/parse-manifests";

const manifests = fs.readFileSync("./sample.yml").toString();

console.log(parseManifests(manifests));

/** outputs
{
  manifests: [
    {
      kind: 'Deployment',
      name: 'backend',
      namespace: 'app-preprod'
    },
    {
      kind: 'SealedSecret',
      name: 'backend-sealed-secret',
      namespace: 'app-preprod'
    },
    { kind: 'Service', name: 'backend', namespace: 'app-preprod' },
    { kind: 'Ingress', name: 'backend', namespace: 'app-preprod' },
    {
      kind: 'SealedSecret',
      name: 'azure-app-volume',
      namespace: 'app-preprod'
    },
    {
      kind: 'PersistentVolumeClaim',
      name: 'uploads',
      namespace: 'app-preprod'
    },
    {
      kind: 'PersistentVolume',
      name: 'app-uploads',
      namespace: 'app-preprod'
    },
    {
      kind: 'Deployment',
      name: 'version1',
      namespace: 'app-preprod'
    },
    { kind: 'Service', name: 'version1', namespace: 'app-preprod' },
    { kind: 'Ingress', name: 'version1', namespace: 'app-preprod' },
    {
      kind: 'Deployment',
      name: 'version2',
      namespace: 'app-preprod'
    },
    {
      kind: 'Service',
      name: 'version2',
      namespace: 'app-preprod'
    },
    {
      kind: 'Ingress',
      name: 'version2',
      namespace: 'app-preprod'
    },
    {
      kind: 'SealedSecret',
      name: 'azure-pg-user',
      namespace: 'app-preprod'
    }
  ],
  hosts: [
    'backend-app-preprod.dev.company.com',
    'version1-app-preprod.dev.company.com',
    'version2-app-preprod.dev.company.com'
  ],
  images: [
    'ghcr.io/company/app/backend:1.1.0-alpha.6',
    'ghcr.io/company/docker/wait-for-postgres:6.38.3',
    'ghcr.io/company/app/frontend-version1:1.1.0-alpha.6',
    'ghcr.io/company/app/frontend-version2:1.1.0-alpha.6'
  ],
  namespace: 'app-preprod',
  'app.github.com/run': '1127909139',
  'app.github.com/repo': 'company/app'
}

```

---

#### example markdown output with [sample.yml](./sample.yml) :

---

<details>
  <summary>Ingresses</summary>

 - 🚀 [backend-app-preprod.dev.company.com](https://backend-app-preprod.dev.company.com)
 - 🚀 [version1-app-preprod.dev.company.com](https://version1-app-preprod.dev.company.com)
 - 🚀 [version2-app-preprod.dev.company.com](https://version2-app-preprod.dev.company.com)

</details>

<details>
  <summary>Docker images</summary>

 - 📦 docker pull ghcr.io/company/app/backend:1.1.0-alpha.6
 - 📦 docker pull ghcr.io/company/docker/wait-for-postgres:6.38.3
 - 📦 docker pull ghcr.io/company/app/frontend-version1:1.1.0-alpha.6
 - 📦 docker pull ghcr.io/company/app/frontend-version2:1.1.0-alpha.6

</details>

