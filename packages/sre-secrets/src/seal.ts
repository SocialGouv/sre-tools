import { cryptFromSecrets } from "@socialgouv/sre-seal"

export interface Config {
  name: String
  secrets: Object
  namespace: String
  context: "prod2" | "dev2"
}

export default (config: Config) => cryptFromSecrets(config)
