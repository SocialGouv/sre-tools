const yargs = require("yargs");

const cryptFromSecrets = require("./src/cryptFromSecrets");

const argv = process.argv.slice(2);

const args = yargs
  // doc
  .usage("Usage: $0 [options] <plaintext>")
  // k8s context
  .nargs("namespace", 1)
  .describe("namespace", "k8s namespace (prod2 only)")
  // secret name
  .nargs("name", 1)
  .describe("name", "k8s secret name (prod2 only)")
  // context
  .nargs("context", 1)
  .describe("context", "k8s context")
  .demandOption(["context"])
  // checks
  .check((argv, options) => {
    if (argv.context === "prod2" && (!argv.namespace || !argv.name)) {
      throw new Error("--name and --namespace are mandatory for prod2");
      return false;
    }
    if (argv._ && argv._.length === 0) {
      throw new Error("You must provide some plain text");
      return false;
    }
    return true;
  });

if (require.main === module) {
  const argv = args.argv;
  cryptFromSecrets({
    ...argv, //context
    secrets: {
      VALUE: argv._ && argv._.join(" "),
    },
  }).then((encrypteds) => {
    console.log(JSON.stringify(encrypteds, null, 2));
  });
}
