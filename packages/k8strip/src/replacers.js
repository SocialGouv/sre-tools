const manifestReplacers = {
  Secret: (manifest) => ({
    ...manifest,
    data:
      (manifest.data &&
        Object.keys(manifest.data).reduce(
          (a, c) => ({ ...a, [c]: "some-secret-value" }),
          {}
        )) ||
      {},
  }),
  ConfigMap: (manifest) => ({
    ...manifest,
    data:
      (manifest.data &&
        Object.keys(manifest.data).reduce(
          (a, c) => ({ ...a, [c]: "some-configmap-value" }),
          {}
        )) ||
      {},
  }),
  SealedSecret: (manifest) => ({
    ...manifest,
    encryptedData:
      (manifest.spec.encryptedData &&
        Object.keys(manifest.spec.encryptedData).reduce(
          (a, c) => ({ ...a, [c]: "some-sealed-secret-value" }),
          {}
        )) ||
      {},
    spec: {
      ...manifest.spec,
      encryptedData:
        (manifest.spec.encryptedData &&
          Object.keys(manifest.spec.encryptedData).reduce(
            (a, c) => ({
              ...a,
              [c]: "some-sealed-secret-value",
            }),
            {}
          )) ||
        {},
    },
  }),
};

const replacers = (manifest) => {
  if (!manifest.kind) {
    return manifest;
  }
  if (manifestReplacers[manifest.kind]) {
    return manifestReplacers[manifest.kind](manifest);
  }
  return manifest;
};

module.exports = replacers;
