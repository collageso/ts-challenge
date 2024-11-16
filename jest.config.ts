import { createDefaultPreset, type JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  ...createDefaultPreset(),
  clearMocks: true,
  coverageProvider: "v8",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
};

export default config;
