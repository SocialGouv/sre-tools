#!/usr/bin/env node

import { red } from "chalk";
import { existsSync, readFileSync } from "fs";
import { load } from "js-yaml";

import type { Service } from "./services";
import { processServices } from "./services";

export const main = async ({
  fromPath = "./.secrets.yaml",
  toPath = "./.k8s",
}: {
  fromPath: string;
  toPath: string;
}): Promise<void> => {
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
  } catch {
    return Promise.reject(`Cannot load yaml file: ${red(fromPath)}`);
  }
};
