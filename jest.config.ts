import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@enums/(.*)": ["<rootDir>/src/enums/$1"],
    "@classes/(.*)": ["<rootDir>/src/classes/$1"],
    "@elements/(.*)": ["<rootDir>/src/classes/elements/$1"],
    "@interfaces/(.*)": ["<rootDir>/src/interfaces/$1"],
    "@helpers/(.*)": ["<rootDir>/src/helpers/$1"],
    "@elements": ["<rootDir>/src/classes/elements"],
  },
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePaths: ["<rootDir>"],
  // moduleDirectories: ["node_modules"],
};

export default config;
