# sre-tools

## Secrets

### kubeseal

```js
const cryptFromSecrets = require("./src/cryptFromSecrets");

const createSealedSecrets = async () =>
  cryptFromSecrets({
    name: "azure-pg-admin-user",
    //namespace: "cdtn-admin",
    context: "dev2", // or prod2 with namespace
    secrets: {
      PGRST_JWT_SECRET: "FyH2ETW8zulPobZ9j6wr3jWM5OtsK2zR84NLBIb0",
      KIKOO: "Bjd9ddeR84NLBIb0",
    },
  })
    .then((sealed) => console.log(YAML.stringify(sealed)))
    .catch(console.log);

createSealedSecrets();
```

:bulb: Copy values from Rancher secret view from Chrome console : `copy(Array.from(document.querySelectorAll("table tbody tr")).map(node => [node.querySelector("td:nth-child(1)").innerText, node.querySelector("td:nth-child(3)").innerText]).reduce((a, c) => ({...a, [c[0]]:c[1]}),{}))`
