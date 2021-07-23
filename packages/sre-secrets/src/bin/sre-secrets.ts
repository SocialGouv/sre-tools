#!/usr/bin/env node

import { main } from "../index";
import spinner from "../spinner";
import yargs from "../yargs";

Promise.resolve()
  .then(async () => {
    const { f: fromPath, t: toPath } = await yargs.parse();
    await main({ fromPath, toPath });
    process.exit(0);
  })
  .catch((error) => {
    spinner.fail(error);
    process.exit(1);
  });
