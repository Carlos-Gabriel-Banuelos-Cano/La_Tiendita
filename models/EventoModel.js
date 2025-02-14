const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventoSchema = new Schema(
  {
    fecha: {
      type: Date,
      required: true,
      default: Date.now, // Valor por defecto
    },
    tipo_evento: {
      type: String,
      required: true,
      enum: ['tipo1', 'tipo2', 'tipo3'], // Valores permitidos
    },
    sensor_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Sensor', // Referencia a la colección de sensores
    },
    actuador_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Actuador', // Referencia a la colección de actuadores
    },
    descripcion: {
      type: String,
      trim: true,
      default: '', // Campo opcional para detalles adicionales
    },
  },
  {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
  }
);

module.exports = mongoose.model('Evento', EventoSchema);