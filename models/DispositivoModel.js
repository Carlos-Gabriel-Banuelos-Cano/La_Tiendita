const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definir esquemas para sensores y actuadores
const SensorSchema = new Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
});

const ActuadorSchema = new Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
});

// Definir esquema para Dispositivo
const DispositivoSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    tipo: { type: String, required: true, enum: ['sensor', 'actuador', 'otro'] },
    ubicacion: { type: String, trim: true },
    sensores: [SensorSchema],
    actuadores: [ActuadorSchema],
  },
  { timestamps: true }
);

// Métodos del esquema
DispositivoSchema.methods.addSensor = function (sensor) {
  this.sensores.push(sensor);
  return this.save();
};

DispositivoSchema.methods.addActuador = function (actuador) {
  this.actuadores.push(actuador);
  return this.save();
};

module.exports = mongoose.model('Dispositivo', DispositivoSchema);