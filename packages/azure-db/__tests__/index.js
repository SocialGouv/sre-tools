const { createDb } = require("../src/createDb");
const { dropDb } = require("../src/dropDb");

jest.mock("execa", (args) =>
  jest.fn((command, args, options) =>
    Promise.resolve({
      stdout: null,
    })
  )
);

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
    const job = await createDb({
      cluster: "cluster-2",
      namespace: "namespace-2",
      database: "database-2",
      user: "user-2",
    });
    expect(job).toMatchSnapshot();
  });
});
