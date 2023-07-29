import { load } from "js-yaml";

export const toEnv = (string) => {
  try {
    const trimmed = string
      .split("\n")
      .map((row) => row.trim())
      .join("\n");

    const obj = load(trimmed);
    if (obj != null && obj.constructor.name === "Object") {
      const env = Object.entries(obj)
        .map(([key, value]) => `${key}=\`${value}\``)
        .join("\n");
      return env;
    }
  } catch (e) {
    console.error(e);
    return string;
  }
  return string;
};
