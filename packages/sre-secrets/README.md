# @socialgouv/sre-secrets

Generate sealed secrets files for k8s deployment.

#### Install

```sh
yarn add -g @socialgouv/sre-secrets
```

:warning: Need `kubeseal` CLI installed on your system.

#### Run

```sh
yarn start
```

#### Build

```sh
yarn build
```

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
name: "my-sealed-secrets" # default sealed secrets name
namespace: "my-app-namespace" # deafault application namespace
environments: # Declare up to 3 environements (dev, preprod, prod)
  dev: # Environment name
    secrets: # List of secrets to seal
      PASSWORD: "my_dev_password"
      SERVICE_TOKEN: "1234"
  preprod:
    secrets:
      PASSWORD: "my_preprod_password"
      SERVICE_TOKEN: "abcd"
  prod:
    name: "my-prod-sealed-secrets" # Overwrite secrets name
    namespace: "my-prod-app-namespace" # Overwrite application namespace
    secrets:
      PASSWORD: "my_strong_prod_password"
      SERVICE_TOKEN: "iBjL1Rcqzhiy4fpxIxdZqohM2Yk"
```
