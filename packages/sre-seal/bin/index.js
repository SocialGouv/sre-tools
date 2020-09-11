const fs = require("fs");
const pipe = require("pipe-args").load();
const yargs = require("yargs");
const YAML = require("yaml");

const cryptFromSecrets = require("../src/cryptFromSecrets");

const readFile = (path) => fs.readFileSync(path).toString();

const isValidInput = (input) => input.match(/^([\w]+)=(.*)/gm);

// convert text input as AAA=XXX to a js object {AAA: XXX}
const parseInputValues = (input) =>
  isValidInput(input)
    .map((line) => line.split(/^([^=]+)=(.*)/).filter(Boolean))
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );

const args = yargs
  // doc
  .usage("Usage: $0 [options] <plaintext>")
  // k8s context
  .nargs("namespace", 1)
  .describe("namespace", "k8s namespace (optional in dev)")
  // secret name
  .nargs("name", 1)
  .describe("name", "k8s secret name (optional in dev)")
  .default("name", "some-secret-name")
  // context
  .nargs("context", 1)
  .describe("context", "k8s context")
  .default("context", "dev2")
  // use existing seal file
  .nargs("from", 1)
  .describe("from", "path to existing seal file")
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
    if (!isValidInput(argv._[0])) {
      throw new Error("Input should be one or more KEY=VALUE line");
      return false;
    }
    if (argv.from) {
      if (!fs.existsSync(argv.from)) {
        throw new Error(`${argv.from} is not found`);
        return false;
      }
    }

    return true;
  });

if (require.main === module) {
  const argv = args.argv;
  const inputValues = parseInputValues(argv._[0]);

  if (argv.from) {
    // try parse from secret
    const yaml = YAML.parse(readFile(argv.from));
    argv.namespace = argv.namespace || yaml.metadata.namespace;
    argv.name = argv.name || yaml.metadata.name;
  }

  cryptFromSecrets({
    ...argv,
    secrets: inputValues,
  }).then((newSealedSecret) => {
    if (argv.from) {
      // log new secrets from some file
      const yaml = YAML.parse(readFile(argv.from));
      yaml.spec.encryptedData = {
        ...(yaml.spec.encryptedData || {}),
        ...newSealedSecret.spec.encryptedData,
      };
      console.log(YAML.stringify(yaml, null, 2));
    } else {
      // log new secrets
      console.log(YAML.stringify(newSealedSecret, null, 2));
    }
  });
}
