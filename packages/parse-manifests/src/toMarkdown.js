import parseManifests from "./index.js";
import summaryToMarkdown from "./summaryToMarkdown.js";

const toMarkdown = (manifests) => {
  const parsed = parseManifests(manifests);

  return summaryToMarkdown(parsed)
};

export default toMarkdown;
