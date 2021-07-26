# @socialgouv/azure-db

Create/Destroy databases on Azure. Commands are run in Kubernetes.

`yarn global add @socialgouv/azure-db` and you'll get `azure-db` command available.

:warning: Need `kubectl` CLI installed on your system and kubernetes context installed.

#### CLI

```sh
Usage: azure-db command [options]

Commands:
  azure-db create                create a new database and user
  azure-db drop                  destroy a database and a user
  azure-db drop-autodevops-dbs   destroy all generated databases

Options:
  --cluster      k8s cluster               [required] [choices: "prod", "dev"]
  --application  gitlab application name                              [required]
  --database     database name
  --user         user name
  --pg-name      alternative PG server prefix
  --secret-name  alternative secret name
```

###### Examples

```sh
# Create a database in DEV
azure-db create --application sample-next-app

# Create a database in PROD
azure-db create --cluster prod2 --application sample-next-app --database demo42 --user demo42

# Destroy a database in DEV
azure-db drop --application sample-next-app --database demo42 --user demo42

# Destroy all generated databases in DEV
azure-db drop-autodevops-dbs --application sample-next-app
```
