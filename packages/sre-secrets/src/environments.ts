import yargs from "./yargs"
import spinner from "./spinner"
import { safeDump } from "js-yaml"
import seal, { Config } from "./seal"
import { yellow, green } from "chalk"
import { mkdirSync, writeFileSync } from "fs"

const { argv } = yargs
const baseName = "sealed-secret"
const folderPath = argv.t || "./.k8s"

const processEnvironment = async (
  namespace,
  serviceName,
  environmentName,
  secrets
) => {
  const config: Config = {
    secrets,
    namespace: namespace,
    name: `${serviceName}-${baseName}`,
    context: environmentName === "prod" ? "prod2" : "dev2",
  }

  const sealed = await seal(config)

  mkdirSync(`${folderPath}/environments/${environmentName}`, {
    recursive: true,
  })

  writeFileSync(
    `${folderPath}/environments/${environmentName}/${serviceName}.${baseName}.yaml`,
    safeDump(sealed, { noRefs: true })
  )
}

export const processEnvironments = async (
  namespace,
  serviceName,
  environments
) => {
  const environmentNames = Object.keys(environments)

  for (const environmentName of environmentNames) {
    spinner.start(
      `creating ${yellow(serviceName)} sealed secrets for ${yellow(
        environmentName
      )}`
    )

    const { secrets } = environments[environmentName]

    await processEnvironment(namespace, serviceName, environmentName, secrets)

    spinner.succeed(
      `${green(serviceName)} sealed secrets created for ${green(
        environmentName
      )} environment (${folderPath}/environments/${environmentName}/${serviceName}.${baseName}.yaml)`
    )
  }
}
