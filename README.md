# sre-tools

To use `sre-seal` and `sre-secrets`, you'll need `kubectl` configured with existing `dev` and `prod` contexts. [kubeseal](https://github.com/bitnami-labs/sealed-secrets) is also required for generating secrets.

| Tool                                               | Usage                                    |
| -------------------------------------------------- | ---------------------------------------- |
| [sre-seal](./packages/sre-seal)                    | Seal single k8s secrets                  |
| [sre-secrets](./packages/sre-secrets)              | Create all sealed secrets files at once  |
| [azure-db](./packages/azure-db)                    | Create/Drop databases and users          |
| [k8strip](./packages/k8strip)                      | Strip sensitive data from k8s manifests  |
| [parse-manifests](./packages/parse-manifests)      | Extract minimal infos from k8S manifests |
| [WebSeal](https://socialgouv.github.io/sre-tools/) | Online sealed-secrets generator          |


