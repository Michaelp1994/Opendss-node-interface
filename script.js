const fs = require("fs");
const path = require("path");

const componentsDir = "./src/classes/components";

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(componentsDir, file);
    const fileNameWithoutExt = path.parse(file).name;
    const newDirPath = path.join(componentsDir, fileNameWithoutExt);

    fs.mkdir(newDirPath, { recursive: true }, (err) => {
      if (err) {
        console.error(`Error creating directory: ${err}`);
        return;
      }

      const newFilePath = path.join(newDirPath, file);
      fs.rename(filePath, newFilePath, (err) => {
        if (err) {
          console.error(`Error moving file: ${err}`);
        }
      });

      const testFilePath = path.join(
        componentsDir,
        `${fileNameWithoutExt}.test.ts`,
      );
      if (fs.existsSync(testFilePath)) {
        const newTestFilePath = path.join(
          newDirPath,
          `${fileNameWithoutExt}.test.ts`,
        );
        fs.rename(testFilePath, newTestFilePath, (err) => {
          if (err) {
            console.error(`Error moving test file: ${err}`);
          }
        });
      }
    });
  });
});
