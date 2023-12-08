const fs = require("fs");
const path = require("path");

const elementsDir = "./src/classes/elements";

fs.readdir(elementsDir, (err, directories) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  directories.forEach((directory) => {
    const dirPath = path.join(elementsDir, directory);
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        console.error(`Error reading directory: ${err}`);
        return;
      }

      const classes = files
        .filter((file) => file.endsWith(".ts") && !file.endsWith(".test.ts"))
        .map((file) => file.replace(".ts", ""));

      const exportStatements = classes
        .map((className) => `export { ${className} } from './${className}';`)
        .join("\n");

      fs.writeFile(path.join(dirPath, "index.ts"), exportStatements, (err) => {
        if (err) {
          console.error(`Error writing file: ${err}`);
        }
      });
    });
  });
});
