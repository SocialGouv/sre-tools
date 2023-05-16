import { toEnv } from "./yamlToEnv";

const tests = [
  {
    title: "valid YAML",
    input: "A: 42\nB: 43",
    expected: true,
  },
  {
    title: "valid YAML quoted",
    input: 'A: "blablabla"',
    expected: true,
  },
  {
    title: "valid YAML multilines",
    input: `A: 42
B: 424
C: |-
  nlabalbalelkfnzemflkfenz
  zekfjbzkmfjbzemfjbzefmze`,
    expected: true,
  },
  {
    title: "invalid YAML",
    input: "some random text",
    expected: false,
  },
  {
    title: "invalid YAML",
    input: "a=42\nb=43",
    expected: false,
  },
  {
    title: "multiple inputs",
    input: `
SOME_TOKEN: abcRE6jnuXVj234Y65zfzeUipcdO
SOME_SECRET: |-
  -----BEGIN RSA PRIVATE KEY-----
  MIIJKAIBAAKCAlkznfzefekBG6MkFlzDVu/C8+c/XABs4HEQNsz61wdKTv9olitl
  QcJ6USzSsQNymwjgkWkkGH987z33As6c0VnqXZBeW2RZouctk4P3888cUBmC8AX+
  JvmbEZ3IBic1uXkTY8tyXtvdmzBJClTFMqDBr9bwq975Yosj35lmp+JEFLdOsZT/
  -----END RSA PRIVATE KEY-----
SOME_EMAIL: aaa@chez.com, bbb@chez.com
SOME_DB: postgres://user:pass@host:port/db?sslmode=require
`,
    expected: true,
  },
];

tests.forEach((t) => {
  it(`toEnv : ${t.title}`, () => {
    expect(toEnv(t.input)).toMatchSnapshot();
  });
});
