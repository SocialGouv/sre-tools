import fs from "fs";
import yaml from "js-yaml";
import { resolve } from "path";
import { main } from "../src/index";

describe("Test sealed secrets generation", () => {
  const filePath = "./__tests__/data/.secrets.yaml";
  const folderPath = `${process.env.RUNNER_TEMP || "/tmp"}/sre-secrets`;
  const matchers = {
    spec: {
      encryptedData: {
        toto: expect.any(String),
        tata: expect.any(String),
      },
    },
  };

  beforeAll(async () => {
    await main({
      fromPath: filePath,
      toPath: folderPath,
    });
    // HACK(douglasduteil): ensure EOL after logs
    // We might want to remove all spinner logs in the future
    process.stdout.write("\n");
    await new Promise((resolve) => setTimeout(resolve, 500));
  });

  test("Check dev snapshot", () => {
    const path = `${folderPath}/environments/dev/app.sealed-secret.yaml`;
    const content = yaml.load(fs.readFileSync(path, "utf8"));
    expect(content).toMatchSnapshot(matchers);
  });

  test("Check preprod snapshot", () => {
    const path = `${folderPath}/environments/preprod/app.sealed-secret.yaml`;
    const content = yaml.load(fs.readFileSync(path, "utf8"));
    expect(content).toMatchSnapshot(matchers);
  });

  test("Check prod snapshot", () => {
    const path = `${folderPath}/environments/prod/app-prod.sealed-secret.yaml`;
    const content = yaml.load(fs.readFileSync(path, "utf8"));
    expect(content).toMatchSnapshot(matchers);
  });
});
