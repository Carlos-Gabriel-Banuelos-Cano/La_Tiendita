const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SensorSchema = new Schema({ nombre: String, tipo: String });
const ActuadorSchema = new Schema({ nombre: String, tipo: String });
const DispositivoSchema = new Schema({
  nombre: String,
  tipo: String,
  ubicacion: String,
  sensores: [SensorSchema],
  actuadores: [ActuadorSchema],
});

module.exports = mongoose.model('Dispositivo', DispositivoSchema);
