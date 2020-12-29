#!/usr/bin/env node
const yargs = require("yargs");
const YAML = require("yaml");
const { randomBytes } = require("crypto");
const {
  createSecret,
} = require("@socialgouv/kosko-charts/components/pg-secret");
const { cryptFromSecrets } = require("@socialgouv/sre-seal");
const {
  getPgServerHostname,
} = require("@socialgouv/kosko-charts/utils/getPgServerHostname");

const { createDb } = require("../src/createDb");
const { dropDb } = require("../src/dropDb");
const { dropAutodevopsDbs } = require("../src/dropAutodevopsDbs");

const getRandomInt = () => parseInt(Math.random() * 100000, 10);

const getRandomPassword = () =>
  randomBytes(30).toString("base64").replace(/[^\w]/g, "");

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
      .describe("pg-name", "PG server prefix if different from application")
      .demandOption(["cluster", "application"]);
  })
  .command("drop", "destroy a database and a user", (yargs) => {
    return getDetaultYargs()
      .describe("database", "database to destroy")
      .describe("user", "user to destroy")
      .demandOption(["cluster", "application", "database", "user"]);
  })
  .command(
    "drop-autodevops-dbs",
    "drop all generated databases from a dev server",
    (yargs) => {
      return getDetaultYargs().demandOption(["cluster", "application"]);
    }
  )
  .demandCommand(1, "Please choose a command first")

  .check((argv, options) => {
    if (!["create", "drop", "drop-autodevops-dbs"].includes(argv._[0])) {
      throw new Error(
        "You must provide a valid command : create, drop or drop-autodevops-dbs"
      );
    }
    if (argv._[0] === "drop" && argv.cluster === "prod2") {
      throw new Error("One cannot drop PROD databases :)");
    }
    if (argv._[0] === "drop-autodevops-dbs" && argv.cluster === "prod2") {
      throw new Error("One cannot drop PROD databases :)");
    }
    return true;
  });

const run = async () => {
  const argv = args.argv;
  const namespace = `${argv.application}-secret`;
  if (argv._[0] === "create") {
    console.log(
      `Create DB ${argv.database} for user ${argv.user} in application ${argv.application} in cluster ${argv.cluster}`
    );
    const password = getRandomPassword();
    await createDb({
      cluster: argv.cluster,
      namespace,
      database: argv.database,
      user: argv.user,
      password,
    });
    const dbHost = getPgServerHostname(
      argv.pgName || argv.application,
      argv.cluster === "prod2" ? "prod" : "dev"
    );
    console.log(
      `Created create-db job in namespace ${namespace} on cluster ${argv.cluster}`
    );
    console.log("---");
    console.log(`# Host : ${dbHost}`);
    console.log(`# Database : ${argv.database}`);
    console.log(`# User : ${argv.user}`);
    console.log(`# Password : ${password}`);
    console.log("---");
    const secret = createSecret({
      database: argv.database,
      user: argv.user,
      password,
      host: dbHost,
      sslmode: "require",
    });
    const sealedSecret = await cryptFromSecrets({
      context: argv.cluster,
      namespace: argv.application,
      name: "azure-pg-user",
      secrets: secret.stringData,
    });
    const sealedYaml = YAML.stringify(sealedSecret, null, 2);
    console.log(sealedYaml);
  } else if (argv._[0] === "drop") {
    console.log(`Drop DB for ${argv.application} in cluster ${argv.cluster}`);
    await dropDb({
      cluster: argv.cluster,
      namespace: `${argv.application}-secret`,
      database: argv.database,
      user: argv.user,
    });
    console.log(
      `Created drop-db job in namespace ${namespace} on cluster ${argv.cluster} `
    );
    console.log(`Database : ${argv.database}`);
    console.log(`User : ${argv.user}`);
  } else if (argv._[0] === "drop-autodevops-dbs") {
    console.log(
      `Drop all DBs for ${argv.application} in cluster ${argv.cluster}`
    );
    await dropAutodevopsDbs({
      cluster: argv.cluster,
      namespace: `${argv.application}-secret`,
    });
  }
};

if (require.main === module) {
  run();
}
