const fs = require("fs");
const parseManifests = require(".");

console.log(parseManifests(fs.readFileSync("./sample.yml").toString()));
