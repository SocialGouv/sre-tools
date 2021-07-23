import { green, yellow } from "chalk";
import { mkdirSync, writeFileSync } from "fs";
import { dump } from "js-yaml";

import { cryptFromSecrets } from "@socialgouv/sre-seal";
import spinner from "./spinner";
import { ServiceEnvironment } from "./services";

const baseName = "sealed-secret";

const processEnvironment = ({ toPath }: { toPath: string }) => async (
  namespace: string,
  serviceName: string,
  environmentName: string,
  { fileName, secretsName, secrets }: ServiceEnvironment
) => {
  const context = environmentName === "prod" ? "prod2" : "dev2";
  const name = secretsName || `${serviceName}-${baseName}`;
  const sealed = await cryptFromSecrets({
    context,
    namespace,
    name,
    secrets,
  });

  mkdirSync(`${toPath}/environments/${environmentName}`, {
    recursive: true,
  });

  writeFileSync(
    `${toPath}/environments/${environmentName}/${
      fileName || serviceName
    }.${baseName}.yaml`,
    dump(sealed, { noRefs: true })
  );
};

export const processEnvironments = ({ toPath }: { toPath: string }) => async (
  namespace: string,
  serviceName: string,
  environments: Record<string, ServiceEnvironment>
) => {
  const environmentNames = Object.keys(environments);

  for (const environmentName of environmentNames) {
    spinner.start(
      `creating ${yellow(serviceName)} sealed secrets for ${yellow(
        environmentName
      )}`
    );

    const config = environments[environmentName];

    await processEnvironment({ toPath })(
      namespace,
      serviceName,
      environmentName,
      config
    );

    spinner.succeed(
      `${green(serviceName)} sealed secrets created for ${green(
        environmentName
      )} environment (${toPath}/environments/${environmentName}/${
        config?.fileName || serviceName
      }.${baseName}.yaml)`
    );
  }
};
