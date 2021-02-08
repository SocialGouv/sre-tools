const k8strip = require("..");

const sample = require("./sample.json");

test("should sanitize sample.json", () => {
  expect(k8strip(sample)).toMatchSnapshot();
});
