import YAML from "yaml";
import getManifestsSummary from "./getManifestsSummary.js";


/** parse a bunch of yaml manifests
 *
 * @return {ManifestsSummary}
 */
const parseManifests = (yaml) => {
  const options = { prettyErrors: true };
  const manifests = YAML.parseAllDocuments(yaml, options)
    .map((doc) => doc.toJSON())
    .filter(Boolean);
  return getManifestsSummary(manifests);
};

export default parseManifests;
