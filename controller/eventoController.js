const Evento = require('../models/EventoModel.js');

exports.getEventos = async (req, res) => {
  const eventos = await Evento.find();
  res.json(eventos);
};

exports.createEvento = async (req, res) => {
  const nuevoEvento = new Evento(req.body);
  await nuevoEvento.save();
  res.status(201).json(nuevoEvento);
};