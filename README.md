# sre-tools

To use these tools, you'll need `kubectl` configured with existing `dev2` and `prod2` contexts. [kubeseal](https://github.com/bitnami-labs/sealed-secrets) is also required for generating secrets.

| Tool                                  | Usage                                   |
| ------------------------------------- | --------------------------------------- |
| [sre-seal](./packages/sre-seal)       | Seal single k8s secrets                 |
| [sre-secrets](./packages/sre-secrets) | Create all sealed secrets files at once |
| [azure-db](./packages/azure-db)       | Create/Drop databases and users         |
