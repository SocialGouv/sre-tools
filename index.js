const yargs = require('yargs');
const execa = require('execa');

const argv = process.argv.slice(2);

const args = yargs
    // doc
    .usage('Usage: $0 [options] <plaintext>')
    // k8s context
    .alias('ns', 'namespace')
    .nargs('namespace', 1)
    .describe('namespace', 'k8s namespace (prod2 only)')
    // secret name
    .nargs('name', 1)
    .describe('name', 'k8s secret name (prod2 only)')
    // context
    .nargs('context', 1)
    .describe('context', 'k8s context')
    .demandOption(['context'])
    // checks
    .check((argv, options) => {
        if (args.context==="prod2" && (!args.namespace || !args.name)) {
          throw new Error("--name and --namespace are mandatory for prod2")
        }
        if (args._ && args._.length === 0) {
          throw new Error("You must provide some plain text")
        } else {
          return true // tell Yargs that the arguments passed the check
        }
      })


const flatify = arr => arr.flatMap((a, c) => a)

// build kubeseal args
const crypt = async ({context, namespace, name, input}) => {
  const args = [["--raw", "--context", context]];
  if (context==="prod2") {
    args.push(["--name", name])
    args.push(["--namespace", namespace])
  } else {
    args.push(["--scope", "cluster-wide"])
  }
  const {stdout} = await execa('kubeseal', flatify(args), {input}).catch(console.log)
  return stdout
}

// create some secret definition
const createSealedSecret = ({namespace, name, annotations, encryptedData}) => ({
  apiVersion: "bitnami.com/v1alpha1",
  kind: "SealedSecret",
  metadata:{
    annotations,
    name,
    namespace
  },
  spec: {
    encryptedData,
    template: {
      metadata:{
        annotations,
        name
      },
      type: "Opaque"
    }
  }
})

const clusterWideAnnotations = {"sealedsecrets.bitnami.com/cluster-wide": "true"}

// convert a dict of plaintext secrets to sealed-secrets
const makeSealSecrets =  ({
  context,
  namespace,
  name,
  secrets,
}) => Promise.all(Object.keys(secrets).map(key => crypt({
  context,
  namespace,
  name,
  input: secrets[key]
}).then(value => ({key, value}))
)).then(encrypteds => {
  const annotations = context==="prod2" ? {} : clusterWideAnnotations;
  return createSealedSecret({
    namespace,
    name,
    annotations,
    encryptedData: encrypteds.reduce((a, c, i) => ({...a, [c.key]: c.value}), {} )
  })
})

if (require.main===module) {
  const argv = args.argv;
  makeSealSecrets({
    ...argv,
    namespace: argv.namespace || "test-kubeseal",
    name: argv.name || "some-secret",
    secrets: {
      X: argv._ && argv._.join(" "),
      A: "coucou",
      B: "lol"
    }
  }).then(encrypteds => {
    console.log(encrypteds)
  })
}
