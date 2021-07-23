import { green, yellow } from "chalk";
import { mkdirSync, writeFileSync } from "fs";
import { safeDump } from "js-yaml";

import { cryptFromSecrets } from "@socialgouv/sre-seal";
import spinner from "./spinner";
import yargs from "./yargs";

const { argv } = yargs;
const baseName = "sealed-secret";
const folderPath = argv.t || "./.k8s";

const processEnvironment = async (
  namespace: string,
  serviceName: string,
  environmentName: string,
  { fileName, secretsName, secrets }: Config
) => {
  const context = environmentName === "prod" ? "prod2" : "dev2";
  const name = secretsName || `${serviceName}-${baseName}`;
  const sealed = await cryptFromSecrets({
    context,
    namespace,
    name,
    secrets,
  });

  mkdirSync(`${folderPath}/environments/${environmentName}`, {
    recursive: true,
  });

  writeFileSync(
    `${folderPath}/environments/${environmentName}/${
      fileName || serviceName
    }.${baseName}.yaml`,
    safeDump(sealed, { noRefs: true })
  );
};

export const processEnvironments = async (
  namespace: string,
  serviceName: string,
  environments: Record<string, unknown>
) => {
  const environmentNames = Object.keys(environments);

  for (const environmentName of environmentNames) {
    spinner.start(
      `creating ${yellow(serviceName)} sealed secrets for ${yellow(
        environmentName
      )}`
    );

    const config = environments[environmentName];

    await processEnvironment(namespace, serviceName, environmentName, config);

    spinner.succeed(
      `${green(serviceName)} sealed secrets created for ${green(
        environmentName
      )} environment (${folderPath}/environments/${environmentName}/${
        config?.fileName || serviceName
      }.${baseName}.yaml)`
    );
  }
};
