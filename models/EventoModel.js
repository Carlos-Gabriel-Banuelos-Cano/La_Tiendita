const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventoSchema = new Schema({
  fecha: {
    type: Date,
    required: true
  },
  tipo_evento: {
    type: String,
    required: true,
    enum: ['tipo1', 'tipo2', 'tipo3'] // Ejemplo de posibles valores
  },
  sensor_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Sensor' // Referencia a otro modelo
  },
  actuador_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Actuador' // Referencia a otro modelo
  }
}, {
  timestamps: true // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Evento', EventoSchema);