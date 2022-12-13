import toMarkdown from "../src/toMarkdown.js";

import fs from "fs";
import path from "path";

beforeEach(() => {
  process.env.RANCHER_PROJECT_ID = "";
});

test("should render markdown", () => {
  const yaml = fs.readFileSync(path.join("sample.yml")).toString();
  const redirect = fs.readFileSync(path.join("redirect.yml")).toString();
  expect(toMarkdown(yaml + redirect)).toMatchSnapshot();
});

test("should render markdown with rancher details", () => {
  const yaml = fs.readFileSync(path.join("sample.yml")).toString();
  const redirect = fs.readFileSync(path.join("redirect.yml")).toString();
  process.env.RANCHER_PROJECT_ID = "xyz";
  expect(toMarkdown(yaml + redirect)).toMatchSnapshot();
});

test("should render markdown without redirects", () => {
  const yaml = fs.readFileSync(path.join("sample.yml")).toString();
  expect(toMarkdown(yaml)).toMatchSnapshot();
});

test("should render markdown without ingress", () => {
  const yaml = fs.readFileSync(path.join("sample2.yml")).toString();
  expect(toMarkdown(yaml)).toMatchSnapshot();
});
