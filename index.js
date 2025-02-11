const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sistema_dispositivos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dispositivoRoutes = require('./routes/dispositivoRoutes');
const eventoRoutes = require('./routes/eventoRoutes');

app.use('/dispositivos', dispositivoRoutes);
app.use('/eventos', eventoRoutes);

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});