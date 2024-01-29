const {
  fs,
  writeFileSync,
  mkdirSync,
  readFileSync,
  copySync,
  existsSync,
  rmSync,
} = require("fs-extra");
const path = require("path");
const yaml = require("js-yaml");

const srcDir = path.join(__dirname, "src");
const distDir = path.join(__dirname, "dist");
const linkListPath = path.join(srcDir, "linklist.yml");
const distPath = path.join(distDir, "linklist.json");

try {
  const listData = yaml.load(readFileSync(linkListPath, "utf8"));

  if (existsSync(distDir)) {
    rmSync(distDir, { recursive: true, force: true });
  }
  mkdirSync(distDir);

  writeFileSync(distPath, JSON.stringify(listData, null, 2));

  console.log(listData);
  console.log("Generate complete.");
} catch (e) {
  console.error(e);
}
