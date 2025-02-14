const mongoose = require('mongoose');
const Evento = require('../models/EventoModel');

exports.getAllEventos = async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEventoById = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) {
      return res.status(404).json({ msg: 'Evento no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEvento = async (req, res) => {
  try {
    const nuevoEvento = new Evento(req.body);
    await nuevoEvento.save();
    res.status(201).json(nuevoEvento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEvento = async (req, res) => {
  try {
    const { id } = req.params;

    // Verifica si el ID es un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'ID de evento no válido' });
    }

    const evento = await Evento.findByIdAndUpdate(id, req.body, { new: true });

    if (!evento) {
      return res.status(404).json({ msg: 'Evento no encontrado' });
    }

    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEvento = async (req, res) => {
  try {
    const evento = await Evento.findByIdAndDelete(req.params.id);
    if (!evento) {
      return res.status(404).json({ msg: 'Evento no encontrado' });
    }
    res.json({ msg: 'Evento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};