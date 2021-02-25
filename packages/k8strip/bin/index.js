#!/usr/bin/env node

const getStdin = require("get-stdin");

const k8strip = require("..");

if (require.main === module) {
  if (process.argv.length < 2) {
    console.error("Usage: cat sample.json | k8strip");
    throw new Error("k8strip need some JSON input");
  }
  (async () => {
    const input = await getStdin();
    try {
      if (input) {
        const data = JSON.parse(input);
        console.log(JSON.stringify(k8strip(data), null, 2));
      } else {
        console.error("Usage: cat sample.json | k8strip");
      }
    } catch (e) {
      console.error(
        "Error: cannot parse input; k8strip only support JSON input"
      );
      console.error(e);
    }
  })();
}
