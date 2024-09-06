const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API para mi aplicación Next.js',
    },
    servers: [
      {
        url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./pages/api/**/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions)

module.exports = { swaggerUi, swaggerSpec }
