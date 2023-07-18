module.exports = {
    // ...otras configuraciones de Jest...
  
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },

    transformIgnorePatterns: [
      '/node_modules/(?!nombre-del-paquete|otro-paquete)/',
    ],
  };
  