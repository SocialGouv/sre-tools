# @socialgouv/azure-db

Create/Destroy databases on Azure. Commands are run in Kubernetes.

`yarn add -g @socialgouv/azure-db` and you'll get `azure-db` command available.

:warning: Need `kubectl` CLI installed on your system and kubernetes context installed.

#### CLI

```sh
Usage: azure-db command [options]

Commands:
  azure-db create  create a new database and user
  azure-db drop    destroy a database and a user

Options:
  --cluster      k8s cluster               [required] [choices: "prod2", "dev2"]
  --application  gitlab application name                              [required]
  --database     database name
  --user         user name

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
