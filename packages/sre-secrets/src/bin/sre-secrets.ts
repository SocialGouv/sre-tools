#!/usr/bin/env node

import { main } from "../index";
import spinner from "../spinner";
import yargs from "../yargs";

const { argv } = yargs;
const fromPath = argv.f;
const toPath = argv.t;

main({ fromPath, toPath }).then(
  () => {
    process.exit(0);
  },
  (error) => {
    spinner.fail(error);
    process.exit(1);
  }
);
