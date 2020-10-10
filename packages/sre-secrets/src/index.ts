#!/usr/bin/env node

import { red } from "chalk"
import { safeLoad } from "js-yaml"
import { existsSync, readFileSync } from "fs"

import yargs from "./yargs"
import spinner from "./spinner"
import { processServices } from "./services"

const { argv } = yargs
const filePath = argv.f || "./.secrets.yaml"

const main = async () => {
  if (!existsSync(filePath)) {
    return Promise.reject(`File not found: ${red(filePath)}`)
  }

  const file = readFileSync(filePath, "utf8")

  try {
    const { namespace, services } = safeLoad(file)
    await processServices(namespace, services)
  } catch (error) {
    return Promise.reject(`Cannot load yaml file: ${red(filePath)}`)
  }

  return process.exit(0)
}

main().catch((error) => {
  spinner.fail(error)
  process.exit(1)
})
