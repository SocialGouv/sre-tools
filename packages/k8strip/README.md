# k8strip

CLI tool and JS module to strip out sensitive content from kubernetes manifests.

All `ConfigMap, Secret, SealedSecret` values are stripped out (not `keys`) and only fields from the [JSON schemas](./src/schemas.json) are exported.

## Install

```sh
npm i -g @socialgouv/k8strip
# or
yarn global add @socialgouv/k8strip
```

## Usage

### CLI

```sh
kubectl --context dev --namespace some-ns get ing,svc,deploy,service,secret,sealedsecret,configmap -ojson  | k8strip
```

### JS

```js
const k8strip = require("@socialgouv/k8strip");

const manifests = require("./manifests.json");

console.log(k8strip(manifests));
```
