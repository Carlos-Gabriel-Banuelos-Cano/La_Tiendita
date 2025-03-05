const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Dispositivos y Eventos',
    version: '1.0.0',
    description: 'API para gestionar dispositivos, sensores, actuadores y eventos',
  },
  servers: [
    {
      url: 'http://localhost:3000', 
      description: 'Servidor de desarrollo',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/dispositivoRoutes.js', './routes/eventoRoutes.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
