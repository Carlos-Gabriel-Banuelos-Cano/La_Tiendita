const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const app = express();
const port = 3000;

app.use(express.json());

connectDB();

const dispositivoRoutes = require('./routes/dispositivoRoutes');
const eventoRoutes = require('./routes/eventoRoutes');

app.use('/api/dispositivos', dispositivoRoutes);
app.use('/api/eventos', eventoRoutes);

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
