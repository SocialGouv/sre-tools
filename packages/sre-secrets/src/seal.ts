import { cryptFromSecrets } from "@socialgouv/sre-seal";

export interface Config {
  name: string;
  secrets: Object;
  namespace: string;
  context: "dev2" | "prod2";
}

export default (config: Config) => cryptFromSecrets(config);
