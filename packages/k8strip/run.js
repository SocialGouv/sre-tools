const k8strip = require("./src");

const manifests = require("./sample.json");

console.log(JSON.stringify(k8strip(manifests), null, 2));
