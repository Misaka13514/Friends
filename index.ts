const {
    fs,
    writeFileSync,
    mkdirSync,
    readFileSync,
    copySync,
    existsSync,
    rmSync
  } = require("fs-extra");
  const yaml = require("js-yaml");
  
  try {
   if (existsSync("./dist/")) {
     rmSync("./dist/", { recursive: true, force: true });
   }
    const listData = yaml.load(readFileSync("./src/list.yaml", "utf8"));
    mkdirSync("./dist/");
  
    writeFileSync("./dist/links.json", JSON.stringify(listData));
    console.log(listData);
    console.log('Generate complete.');
  } catch (e) {
    console.error(e);
  }