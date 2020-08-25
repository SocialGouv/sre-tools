// create some secret definition
const createSealedSecret = ({
  namespace,
  name,
  annotations,
  encryptedData,
}) => ({
  apiVersion: "bitnami.com/v1alpha1",
  kind: "SealedSecret",
  metadata: {
    annotations,
    name,
    namespace,
  },
  spec: {
    encryptedData,
    template: {
      metadata: {
        annotations,
        name,
      },
      type: "Opaque",
    },
  },
});

module.exports = createSealedSecret;
