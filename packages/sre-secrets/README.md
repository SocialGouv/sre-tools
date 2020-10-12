# @socialgouv/sre-secrets

Generate sealed secrets files for k8s deployment.

### Usage

#### Install

```sh
npm add -g @socialgouv/sre-secrets
```

This package can also be installed localy.
:warning: It requires `kubeseal` CLI installed on your system to work.

#### Cli

```sh
Usage: sre-secrets [options]

Options:
  -h, --help     Show help                       [boolean]
  -f, --from     File containing secrets         [string]  [default: "./.secrets.yaml"]
  -t, --to       Folder to store sealed secrets  [string]  [default: "./.k8s"]
  -v, --version  Show version number             [boolean]
```

###### Examples

Ran at project level it produces all required sealed secrets files for k8s deployment.

```sh
sre-secrets --from=./.secrets.yaml --to=./.k8s
```

Assuming the existence of a `.secrets.yaml` file as follows:

```yaml
namespace: "carnets"
services:
  - name: "app"
    environments:
      dev:
        secrets:
          SERVICE_TOKEN: "V16gKZBHjh8z7aO2IeFxTqvS5JFCmxHIgyuqQ"
          USER_PASSWORD: "ObkWO7BUkmDFAl3v_XP-nNEYADymg2FeO5168-nj9BdreHTyp7NSrnmumBFNbY1dg6m-irxrEHxw"
      preprod:
        secrets:
          SERVICE_TOKEN: "V16gKZBHjh8z7aO2IeFxTqvS5JFCmxHIgyuqQ"
          USER_PASSWORD: "ObkWO7BUkmDFAl3v_XP-nNEYADymg2FeO5168-nj9BdreHTyp7NSrnmumBFNbY1dg6m-irxrEHxw"
      prod:
        secrets:
          SERVICE_TOKEN: "V16gKZBHjh8z7aO2IeFxTqvS5JFCmxHIgyuqQ"
          USER_PASSWORD: "ObkWO7BUkmDFAl3v_XP-nNEYADymg2FeO5168-nj9BdreHTyp7NSrnmumBFNbY1dg6m-irxrEHxw"

  - name: "hasura"
    environments:
      dev:
        secrets:
          HASURA_GRAPHQL_ADMIN_SECRET: "hasurapassword"
      preprod:
        secrets:
          HASURA_GRAPHQL_ADMIN_SECRET: "hasurapassword"
      prod:
        secrets:
          HASURA_GRAPHQL_ADMIN_SECRET: "hasurapassword"
          HASURA_GRAPHQL_DATABASE_URL: "postgresql://user%40my_server..."

  - name: "pg"
    environments:
      dev:
        secretsName: "azure-pg-admin-user" # overwrite default sealed secrets name
        secrets:
          DATABASE_URL: "postgresql://user%40my_server..."
          PGHOST: "my_server..."
          PGPASSWORD: "my_password..."
          PGSSLMODE: "require"
          PGUSER: "my_user..."
      preprod:
        fileName: "pg-user" # overwrite default sealed secrets file name
        secretsName: "azure-pg-user"
        secrets:
          DATABASE_URL: "postgresql://user%40my_server..."
          PGHOST: "my_server..."
          PGPASSWORD: "my_password..."
          PGSSLMODE: "require"
          PGUSER: "my_user..."
      prod:
        fileName: "pg-user"
        secretsName: "azure-pg-user"
        secrets:
          DATABASE_URL: "postgresql://user%40my_server..."
          PGHOST: "my_server..."
          PGPASSWORD: "my_password..."
          PGSSLMODE: "require"
          PGUSER: "my_user..."
```

### Developement

#### Run

```sh
yarn start
```

#### Build

```sh
yarn build
```

#### Test

```sh
yarn test
```

With coverage:

```sh
yarn test-coverage
```
