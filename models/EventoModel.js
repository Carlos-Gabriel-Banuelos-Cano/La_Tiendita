const EventoSchema = new Schema({
    fecha: Date,
    tipo_evento: String,
    sensor_id: Schema.Types.ObjectId,
    actuador_id: Schema.Types.ObjectId,
  });
  
  module.exports = mongoose.model('Evento', EventoSchema);