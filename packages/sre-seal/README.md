# @socialgouv/sre-seal

`yarn global add @socialgouv/sre-seal` and you'll get `sre-seal` command available.

:warning: Need `kubeseal` CLI installed on your system.

#### CLI

```sh
Usage: sre-seal [options] <KEY=someSecretMessage>

Options:
  --namespace  k8s namespace (optional in dev)                   [default: null]
  --name       k8s secret name (optional in dev)   [default: "some-secret-name"]
  --context    k8s context                                     [default: "dev2"]
  --from       path to existing seal file
```

###### Examples

```sh
# Dev secrets
# crypt a bunch of key/values
cat values.yml | sre-seal > sealed.yml
# crypt a single value
echo "PASSWORD=pouet" | sre-seal > sealed.yml

# Prod secrets have mandatories namespace and secret name
cat values.yml | sre-seal --context prod2 --namespace project --name secret-name > sealed.yml

# Add new secret to some existing secret file with `--from`
echo "PASSWORD=pouet" | sre-seal --from current-seal.yml > sealed.yml

```

#### JavaScript

```js
const YAML = require("yaml");
const { cryptFromSecrets } = require("@socialgouv/sre-seal");

cryptFromSecrets({
  name: "some-secret-name",
  //namespace: "cdtn-admin",
  context: "dev2", // or prod2 with namespace
  secrets: {
    PGRST_JWT_SECRET: "FyH2ETW8zulPobZ9j6wr3jWM5OtsK2zR84NLBIb0",
    KIKOO: "Bjd9ddeR84NLBIb0",
  },
})
  .then((sealed) => console.log(YAML.stringify(sealed)))
  .catch(console.log);
```

:bulb: Copy values from Rancher secret view from Chrome console : `copy(Array.from(document.querySelectorAll("table tbody tr")).map(node => [node.querySelector("td:nth-child(1)").innerText, node.querySelector("td:nth-child(3)").innerText]).reduce((a, c) => ({...a, [c[0]]:c[1]}),{}))`
