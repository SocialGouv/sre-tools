import { load } from "js-yaml";

export const toEnv = (string) => {
  try {
    const obj = load(string);
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
