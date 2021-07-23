import yargs from "yargs";

export default yargs
  .usage("Usage: $0 [options]")
  .example(
    "$0 secrets -f ./.secrets.yaml -t ./.k8s",
    "Create project sealed secrets based on a yaml file"
  )
  .help("h")
  .options({
    f: {
      alias: "from",
      default: "./.secrets.yaml",
      describe: "File containing secrets",
      type: "string",
    },
    h: { alias: "help", describe: "Show help" },
    t: {
      alias: "to",
      default: "./.k8s",
      describe: "Folder to store sealed secrets",
      type: "string",
    },
    v: { alias: "version" },
  })
  .epilog("SocialGouv © 2021");
