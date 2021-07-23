#!/usr/bin/env node

import { red } from "chalk";
import { existsSync, readFileSync } from "fs";
import { safeLoad } from "js-yaml";

import { processServices } from "./services";

export const main = async (filePath: string) => {
  if (!existsSync(filePath)) {
    return Promise.reject(`File not found: ${red(filePath)}`);
  }

  const file = readFileSync(filePath, "utf8");

  try {
    const { namespace, services } = safeLoad(file);
    await processServices(namespace, services);
  } catch (error) {
    return Promise.reject(`Cannot load yaml file: ${red(filePath)}`);
  }

  return process.exit(0);
};
