import toText from "../src/toText.js";

import fs from "fs";
import path from "path";

//console.log(parseManifests(fs.readFileSync("../sample.yml").toString()));

beforeEach(() => {
  process.env.RANCHER_PROJECT_ID = "";
});

test("should render text", () => {
  const yaml = fs.readFileSync(path.join("sample.yml")).toString();
  const redirect = fs.readFileSync(path.join("redirect.yml")).toString();
  expect(toText(yaml + redirect)).toMatchSnapshot();
});

test("should render text with rancher details", () => {
  const yaml = fs.readFileSync(path.join("sample.yml")).toString();
  const redirect = fs.readFileSync(path.join("redirect.yml")).toString();
  process.env.RANCHER_PROJECT_ID = "xyz";
  expect(toText(yaml + redirect)).toMatchSnapshot();
});

test("should render text without redirect", () => {
  const yaml = fs.readFileSync(path.join("sample.yml")).toString();
  expect(toText(yaml)).toMatchSnapshot();
});
