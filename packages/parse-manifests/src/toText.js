import parseManifests from "./index.js";
import summaryToText from "./summaryToText.js";

const toText = (manifests) => {
  const parsed = parseManifests(manifests);

  return summaryToText(parsed)
};

export default toText;
