module.exports = {
  
  testEnvironment: 'node', // Add this line to specify the test environment
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Assuming you have Babel configured to handle ES modules
    },

    transformIgnorePatterns: [
      '/node_modules/(?!nombre-del-paquete|otro-paquete)/',
      '^.+\\.jsx?$',
    '^.+\\.gif$',
    ],

    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    
  };
  