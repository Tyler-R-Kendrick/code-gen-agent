module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^@tools/(.*)$': '<rootDir>/src/tools/$1',
    '^@codegenagent/(.*)$': '<rootDir>/src/CodeGenAgent/$1',
    '^@mcp/(.*)$': '<rootDir>/src/CodeGenAgent.MCP.Host/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/']
};