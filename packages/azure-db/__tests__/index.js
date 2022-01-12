const { createDb } = require("../src/createDb");
const { dropDb } = require("../src/dropDb");

jest.mock("execa", (args) =>
  jest.fn((command, args, options) =>
    Promise.resolve({
      stdout: null,
    })
  )
);

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

process.env.SOCIALGOUV_BASE_DOMAIN = "testing";
process.env.GITHUB_SHA = "sha-123456";
process.env.GITHUB_REF = "ref-aaa";
process.env.GITHUB_REPOSITORY = "socialgouv/sre-tools";
process.env.GITHUB_JOB = "job-678";
process.env.GITHUB_RUN_ID = "123456789";

describe("Test azure-db commands", () => {
  test("createDb snapshot", async () => {
    const job = await createDb({
      cluster: "cluster-1",
      namespace: "namespace-1",
      database: "database-1",
      user: "user-1",
      password: "password-1",
    });
    expect(job).toMatchSnapshot();
  });

  test("dropDb snapshot", async () => {
    const job = await dropDb({
      cluster: "cluster-2",
      namespace: "namespace-2",
      database: "database-2",
      user: "user-2",
    });
    expect(job).toMatchSnapshot();
  });
});
