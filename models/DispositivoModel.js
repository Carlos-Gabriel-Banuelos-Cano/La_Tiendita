const mongoose = require('mongoose');
const {Schema} = mongoose;

const SensorSchema = new Schema({ nombre: String, tipo: String });
const ActuadorSchema = new Schema({ nombre: String, tipo: String });
const DispositivoSchema = new Schema({
  nombre: String,
  tipo: String,
  ubicacion: String,
  sensores: [SensorSchema],
  actuadores: [ActuadorSchema],
});

DispositivoSchema.methods.addSensor = function(sensor) {
  this.sensores.push(sensor);
  return this.save();
};

DispositivoSchema.methods.addActuador = function(actuador) {
  this.actuadores.push(actuador);
  return this.save();
};

module.exports = mongoose.model('Dispositivo', DispositivoSchema);
