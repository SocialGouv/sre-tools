# @socialgouv/azure-db

`yarn add -g @socialgouv/azure-db` and you'll get `azure-db` command available.

:warning: Need `kubectl` CLI installed on your system and kubernetes context installed.

#### CLI

```sh
Usage: azure-db command [options]

Options:
  --namespace  k8s namespace (optional in dev)                   [default: null]
  --name       k8s secret name (optional in dev)   [default: "some-secret-name"]
  --context    k8s context                                     [default: "dev2"]
  --from       path to existing seal file
```

###### Examples

```sh
# Create a database in DEV
azure-db create --application sample-next-app

# Create a database in PROD
azure-db create --cluster prod2 --application sample-next-app --database demo42 --user demo42

# Destroy a database in DEV
azure-db drop --application sample-next-app --database demo42 --user demo42
```
