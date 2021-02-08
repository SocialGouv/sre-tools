#!/usr/bin/env node

const pipe = require("pipe-args").load();

const k8strip = require("..");

if (require.main === module) {
  if (process.argv.length < 3) {
    console.error("Usage: cat sample.json | k8strip");
    throw new Error("k8strip need some JSON input");
  }
  const input = process.argv[process.argv.length - 1];
  try {
    if (input) {
      const data = JSON.parse(input);
      console.log(JSON.stringify(k8strip(data), null, 2));
    } else {
      console.error("Usage: cat sample.json | k8strip");
    }
  } catch (e) {
    console.error("Error: cannot parse input; k8strip only support JSON input");
    console.error(e);
  }
}
