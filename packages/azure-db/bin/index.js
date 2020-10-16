#!/usr/bin/env node

const yargs = require("yargs");

const getRandomInt = () => parseInt(Math.random() * 100000, 10);

const getDetaultYargs = () =>
  yargs
    .nargs("cluster", 1)
    .describe("cluster", "k8s cluster")
    .choices("cluster", ["prod2", "dev2"])
    .default("cluster", "dev2")
    .nargs("application", 1)
    .describe("application", "gitlab application name")
    .nargs("database", 1)
    .nargs("user", 1);

const args = yargs
  // doc
  .usage("Usage: $0 command [options]")

  .command("create", "create a new database and user", (yargs) => {
    const randomInt = getRandomInt();
    return getDetaultYargs()
      .describe("database", "new database name")
      .default("database", () => `db_${randomInt}`)
      .describe("user", "new user name")
      .default("user", () => `user_${randomInt}`)
      .demandOption(["cluster", "application"]);
  })
  .command("drop", "destroy a database and a user", (yargs) => {
    return getDetaultYargs()
      .describe("database", "database to destroy")
      .describe("user", "user to destroy")
      .demandOption(["cluster", "application", "database", "user"]);
  })
  .demandCommand(1, "Please choose a command first")

  .check((argv, options) => {
    console.log("check", argv, options);
    if (!["create", "drop"].includes(argv._[0])) {
      throw new Error("You must provide a valid command : create or drop");
      return false;
    }
    if (argv._[0] === "drop" && argv.cluster === "prod2") {
      throw new Error("One cannot drop PROD databases :)");
      return false;
    }
    return true;
  });

if (require.main === module) {
  const argv = args.argv;
  console.log("argv", argv);
  if (argv._[0] === "create") {
    console.log(
      `create DB ${argv.database} for user ${argv.user} in application ${argv.application} in cluster ${argv.cluster}`
    );
  } else if (argv._[0] === "drop") {
    console.log(`drop DB for ${argv.application} in cluster ${argv.cluster}`);
  }
}
