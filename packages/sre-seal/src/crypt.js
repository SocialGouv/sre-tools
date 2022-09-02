const execa = require("execa");

const flatify = (arr) => arr.flatMap((a, c) => a);

const sealedSecretsUrls = {
  prod: "https://kubeseal.prod2.fabrique.social.gouv.fr/v1/cert.pem",
  dev: "https://kubeseal.dev2.fabrique.social.gouv.fr/v1/cert.pem",
};

// build kubeseal args and execute kubeseal
const crypt = async ({ context, namespace, name, input }) => {
  const args = [["--raw", "--context", context]];
  if (context === "prod") {
    args.push(["--scope", "namespace-wide"]);
    args.push(["--namespace", namespace]);
  } else {
    args.push(["--scope", "cluster-wide"]);
  }
  const env = {};
  if (sealedSecretsUrls[context]) {
    env.SEALED_SECRETS_CERT = sealedSecretsUrls[context];
  }
  const { stdout } = await execa("kubeseal", flatify(args), {
    input,
    env,
  }).catch(console.log);
  return stdout;
};

module.exports = crypt;
