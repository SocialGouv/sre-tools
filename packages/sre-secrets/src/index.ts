#!/usr/bin/env node

import { red } from "chalk";
import { existsSync, readFileSync } from "fs";
import { load } from "js-yaml";

import { processServices, Service } from "./services";

export const main = async ({
  fromPath = "./.secrets.yaml",
  toPath = "./.k8s",
}) => {
  if (!existsSync(fromPath)) {
    return Promise.reject(`File not found: ${red(fromPath)}`);
  }

  const file = readFileSync(fromPath, "utf8");

  try {
    const { namespace, services } = load(file) as {
      namespace: string;
      services: Service[];
    };
    await processServices({ toPath })(namespace, services);
  } catch (error) {
    return Promise.reject(`Cannot load yaml file: ${red(fromPath)}`);
  }
};
