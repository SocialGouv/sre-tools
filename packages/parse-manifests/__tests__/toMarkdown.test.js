import toMarkdown from "../src/toMarkdown.js";

import fs from "fs";
import path from "path";

//console.log(parseManifests(fs.readFileSync("../sample.yml").toString()));

test("should render markdown", () => {
  const yaml = fs.readFileSync(path.join("sample.yml")).toString();
  const redirect = fs.readFileSync(path.join("redirect.yml")).toString();
  expect(toMarkdown(yaml + redirect)).toMatchSnapshot();
});

test("should render markdown without redirects", () => {
  const yaml = fs.readFileSync(path.join("sample.yml")).toString();
  expect(toMarkdown(yaml)).toMatchSnapshot();
});
