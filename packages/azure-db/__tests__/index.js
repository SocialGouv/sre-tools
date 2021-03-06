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

process.env.CI_COMMIT_SHORT_SHA = "abcdefgh";

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
