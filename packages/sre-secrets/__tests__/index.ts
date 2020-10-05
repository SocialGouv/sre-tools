const fs = require("fs")
const util = require("util")
const yaml = require("js-yaml")
const exec = util.promisify(require("child_process").exec)

describe("Test sealed secrets generation", () => {
  const filePath = "./__tests__/data/.secrets.yaml"
  const folderPath = "/tmp/sre-secrets"
  const matchers = {
    spec: {
      encryptedData: {
        toto: expect.any(String),
        tata: expect.any(String),
      },
    },
  }

  test("Generate sealed secrets", async () => {
    const { stdout, stderr } = await exec(
      `node ./bin/index.js --from=${filePath} --to=${folderPath}`
    )
    if (stdout) console.log("stdout:", stdout)
    if (stderr) console.log("stderr:", stderr)
  })

  test("Check dev snapshot", () => {
    const path = `${folderPath}/environments/dev/my-sealed-secrets.yaml`
    const content = yaml.safeLoad(fs.readFileSync(path, "utf8"))
    expect(content).toMatchSnapshot(matchers)
  })

  test("Check preprod snapshot", () => {
    const path = `${folderPath}/environments/preprod/my-sealed-secrets.yaml`
    const content = yaml.safeLoad(fs.readFileSync(path, "utf8"))
    expect(content).toMatchSnapshot(matchers)
  })

  test("Check prod snapshot", () => {
    const path = `${folderPath}/environments/prod/my-prod-sealed-secrets.yaml`
    const content = yaml.safeLoad(fs.readFileSync(path, "utf8"))
    expect(content).toMatchSnapshot(matchers)
  })
})