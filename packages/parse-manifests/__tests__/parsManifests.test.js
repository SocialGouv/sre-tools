const parseManifests = require("..");

const fs = require("fs");
const path = require("path");

//console.log(parseManifests(fs.readFileSync("../sample.yml").toString()));

test("should parse manifests correctly", () => {
  const yaml = fs
    .readFileSync(path.join(__dirname, "..", "sample.yml"))
    .toString();
  expect(parseManifests(yaml)).toMatchSnapshot();
  expect(parseManifests(yaml).isProduction).toEqual(false);
});

test("PROD manifests correctly should be detected based on ingress rule", () => {
  const yaml = fs
    .readFileSync(path.join(__dirname, "..", "sample.yml"))
    .toString()
    .replace(
      /(\s+)kubernetes\.io\/ingress\.class\:\snginx/g,
      `$1kubernetes.io/ingress.class: nginx
$1certmanager.k8s.io/cluster-issuer: letsencrypt-prod
`
    );
  expect(parseManifests(yaml).isProduction).toEqual(true);
});
