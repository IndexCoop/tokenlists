import tsConfig from './tsconfig.json';
import { createDefaultPreset } from 'ts-jest';
import type { Config } from '@jest/types';
import * as path from 'node:path';

interface TsConfigPaths {
  [key: string]: string[];
}

function convertTsConfigPathsToModuleNameMapper(
  paths: TsConfigPaths = {},
): Record<string, string> {
  const moduleNameMapper: Record<string, string> = {};

  for (const [key, value] of Object.entries(paths)) {
    const jestKey = `^${key.replace(/\*/, '(.*)')}$`;
    const jestValue = path.join(
      '<rootDir>',
      './',
      value[0].replace(/\*/, '$1'),
    );
    moduleNameMapper[jestKey] = jestValue;
  }

  return moduleNameMapper;
}

const defaultPreset = createDefaultPreset();

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  ...defaultPreset,
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transformIgnorePatterns: ['/node_modules/'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './coverage', outputName: 'junit.xml' }],
  ],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/index.ts',
    '/dist/',
    '/types/',
    '/tests/utils.ts',
  ],
  moduleNameMapper: convertTsConfigPathsToModuleNameMapper(
    tsConfig.compilerOptions.paths,
  ),
} as Config.InitialOptions;
