import toText from "../src/toText.js";

import fs from "fs";
import path from "path";

//console.log(parseManifests(fs.readFileSync("../sample.yml").toString()));

test("should render text", () => {
  const yaml = fs.readFileSync(path.join("sample.yml")).toString();
  expect(toText(yaml)).toMatchSnapshot();
});
