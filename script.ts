import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";

function getTsFiles(dir: string, files_: string[]): string[] {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getTsFiles(name, files_);
    } else if (name.endsWith(".ts")) {
      files_.push(name);
    }
  }
  return files_;
}

function parseFile(fileName: string): ts.SourceFile {
  const program = ts.createProgram([fileName], { allowJs: true });
  return program.getSourceFile(fileName)!;
}

function findClassesAndInterfaces(sourceFile: ts.SourceFile) {
  const classes: ts.ClassDeclaration[] = [];
  const interfaces: ts.InterfaceDeclaration[] = [];

  ts.forEachChild(sourceFile, (node) => {
    if (ts.isClassDeclaration(node)) {
      classes.push(node);
    } else if (ts.isInterfaceDeclaration(node)) {
      interfaces.push(node);
    }
  });

  return { classes, interfaces };
}

function getProperties(
  node: ts.ClassDeclaration | ts.InterfaceDeclaration,
): string[] {
  return node.members
    .filter(ts.isPropertyDeclaration)
    .map((property) => (property.name as ts.Identifier).text);
}

function compareProperties(
  classProperties: string[],
  interfaceProperties: string[],
): boolean {
  return classProperties.every((prop) => interfaceProperties.includes(prop));
}

const tsFiles = getTsFiles("./src/classes/elements", []);
tsFiles.forEach((file) => {
  const sourceFile = parseFile(file);
  const { classes, interfaces } = findClassesAndInterfaces(sourceFile);

  classes.forEach((cls) => {
    const classProperties = getProperties(cls);
    interfaces.forEach((intf) => {
      const interfaceProperties = getProperties(intf);
      const isImplementationCorrect = compareProperties(
        classProperties,
        interfaceProperties,
      );

      if (!isImplementationCorrect) {
        console.log(
          `Class ${cls.name!.text} does not correctly implement interface ${
            intf.name.text
          }`,
        );
      }
    });
  });
});
