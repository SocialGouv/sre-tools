import toMarkdown from "../src/toMarkdown.js";

import fs from "fs";
import path from "path";

//console.log(parseManifests(fs.readFileSync("../sample.yml").toString()));

test("should render markdown", () => {
  const yaml = fs.readFileSync(path.join("sample.yml")).toString();
  expect(toMarkdown(yaml)).toMatchSnapshot();
});
