#!/usr/bin/env node

import ora from "ora"
import { stringify } from "yaml"
import { safeLoad } from "js-yaml"
import { yellow, green } from "chalk"
import { existsSync, readFileSync, mkdirSync, writeFileSync } from "fs"

import yargs from "./yargs"
import seal, { Config } from "./seal"

const main = async () => {
  const { argv } = yargs
  const folderPath = argv.t || "./.k8s"
  const filePath = argv.f || "./.secrets.yaml"

  if (!existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`)
  }

  const { name, namespace, environments } = safeLoad(
    readFileSync(filePath, "utf8")
  )

  const environmentNames = Object.keys(environments)

  for (const environmentName of environmentNames) {
    const spinner = ora(
      `Creating sealed secrets for ${yellow(environmentName)}`
    ).start()

    const environment = environments[environmentName]

    const config: Config = {
      name: environment.name || name,
      namespace: environment.namespace || namespace,
      context: environmentName === "prod" ? "prod2" : "dev2",
      secrets: environment.secrets,
    }

    const sealed = await seal(config)

    mkdirSync(`${folderPath}/environments/${environmentName}`, {
      recursive: true,
    })

    writeFileSync(
      `${folderPath}/environments/${environmentName}/${config.name}.yaml`,
      stringify(sealed)
    )

    spinner.succeed(
      `Sealed secrets created for ${green(
        environmentName
      )} (${folderPath}/environments/${environmentName}/${config.name}.yaml)`
    )
  }

  return process.exit()
}

main()
