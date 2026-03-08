    preset: 'jest-preset-angular',
    transform: {
            {
};
const { pathsToModuleNameMapper } = require('ts-jest');
            'ts-jest',
        ],
            },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: '<rootDir>/',
    },
                babel: true,
        '^.+\\.{ts|tsx}?$': [

module.exports = {
    }),
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    setupFiles: ['<rootDir>/jest.setup.js'],
                tsConfig: 'tsconfig.spec.json',
    testMatch: ['<rootDir>/src/**/*(*.)+(spec).+(ts)', '<rootDir>/main/**/*(*.)+(spec).+(js)'],
    roots: ['<rootDir>/'],
const { compilerOptions } = require('./tsconfig.base');
