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
