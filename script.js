const fs = require("fs");
const path = require("path");

const interfacesDir = path.join(__dirname, "src/interfaces");
const componentsDir = path.join(__dirname, "src/classes/components");

fs.readdir(interfacesDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".ts") {
      const baseName = path.basename(file, "Interface.ts");
      const newDir = path.join(componentsDir, baseName);

      // Move interface file
      fs.rename(
        path.join(interfacesDir, file),
        path.join(newDir, file),
        (err) => {
          if (err) {
            console.error(`Error moving file: ${err}`);
            return;
          }
        },
      );
    }
  });
});
