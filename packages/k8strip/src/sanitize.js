const Ajv = require("ajv").default;

const replacers = require("./replacers");
const schemas = require("./schemas.json");

const ajv = new Ajv({
  removeAdditional: "all",
});

const validate = ajv.addSchema(schemas).compile(schemas.definitions.manifest);

const processManifest = (manifest) => {
  validate(manifest); // mutates manifest
  return replacers(manifest);
};

const sanitize = (manifests) => {
  const newManifests = JSON.parse(JSON.stringify(manifests)); // poor-man deep copy
  const result = [];
  if (newManifests.kind === "List") {
    result.push(...newManifests.items.map(processManifest));
  } else {
    result.push(processManifest(newManifests));
  }
  return result;
};

module.exports = sanitize;
