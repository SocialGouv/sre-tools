const createSealedSecret = require("./createSealedSecret");
const crypt = require("./crypt");

const clusterWideAnnotations = {
  "sealedsecrets.bitnami.com/cluster-wide": "true",
};
const namespaceWideAnnotations = {
  "sealedsecrets.bitnami.com/namespace-wide": "true",
};

// convert a dict of plaintext secrets to sealed-secrets
const cryptFromSecrets = ({ context, namespace, name, secrets }) =>
  Promise.all(
    Object.keys(secrets).map((key) =>
      crypt({
        context,
        namespace,
        name,
        input: secrets[key],
      }).then((value) => ({ key, value }))
    )
  ).then((encrypteds) => {
    const annotations = context === "prod" ? namespaceWideAnnotations : clusterWideAnnotations;
    return createSealedSecret({
      namespace,
      name,
      annotations,
      encryptedData: encrypteds.reduce(
        (a, c, i) => ({ ...a, [c.key]: c.value }),
        {}
      ),
    });
  });

module.exports = cryptFromSecrets;
