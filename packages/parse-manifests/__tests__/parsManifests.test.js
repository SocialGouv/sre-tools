const parseManifests = require("..");

const fs = require("fs");
const path = require("path");

//console.log(parseManifests(fs.readFileSync("../sample.yml").toString()));

test("should parse manifests correctly", () => {
  const yaml = fs
    .readFileSync(path.join(__dirname, "..", "sample.yml"))
    .toString();
  expect(parseManifests(yaml)).toMatchSnapshot();
});
