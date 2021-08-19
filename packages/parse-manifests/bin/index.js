#!/usr/bin/env node

import getStdin from "get-stdin";

import parseManifests from "../src/index.js";
import toMarkdown from "../src/toMarkdown.js";
import toText from "../src/toText.js";

const usage = () => {
  console.error(
    "Usage: cat manifests.yml | parse-manifests [--json|markdown|text]"
  );
};

const getOutputFormat = () => {
  const option =
    process.argv.length >= 2
      ? process.argv[process.argv.length - 1].replace(/^--/, "")
      : "json";
  return option || "json";
};

if (process.argv.length < 2) {
  usage();
  throw new Error("parse-manifests need some YAML input");
}
(async () => {
  const input = await getStdin();
  const format = getOutputFormat();
  try {
    if (input) {
      if (format === "markdown") {
        const markdown = toMarkdown(input);
        console.log(markdown);
        return;
      } else if (format === "text") {
        const text = toText(input);
        console.log(text);
        return;
      }
      console.log(JSON.stringify(parseManifests(input), null, 2));
    } else {
      usage();
    }
  } catch (e) {
    console.error(
      "Error: cannot parse input; parse-manifests only support YAML input"
    );
    console.error(e);
  }
})();
