// jest.config.js
module.exports = {
    testEnvironment: 'node', // Environment testing (Node.js)
    coveragePathIgnorePatterns: ['/node_modules/'], // Abaikan folder node_modules
    testMatch: ['**/__tests__/**/*.test.js'], // Lokasi file test
  };