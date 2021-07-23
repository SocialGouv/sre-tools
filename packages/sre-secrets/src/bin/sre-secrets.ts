#!/usr/bin/env node

import { main } from "../index";
import spinner from "../spinner";
import yargs from "../yargs";

const { argv } = yargs;
const filePath = argv.f || "./.secrets.yaml";
main(filePath).catch((error) => {
  spinner.fail(error);
  process.exit(1);
});
