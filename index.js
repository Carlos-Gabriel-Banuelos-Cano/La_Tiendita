const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); 
const dispositivoRoutes = require('./routes/dispositivoRoutes');
const eventoRoutes = require('./routes/eventoRoutes');
const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); 

connectDB();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/dispositivos', dispositivoRoutes);
app.use('/eventos', eventoRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal en el servidor' });
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
  console.log(`Documentación en http://localhost:${port}/api-docs`);
});
