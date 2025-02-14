const mongoose = require('mongoose');
const Dispositivo = require('../models/DispositivoModel');

exports.getAllDispositivos = async (req, res) => {
  try {
    const dispositivos = await Dispositivo.find();
    res.json(dispositivos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDispositivoById = async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findById(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ msg: 'Dispositivo no encontrado' });
    }
    res.json(dispositivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDispositivo = async (req, res) => {
  try {
    const { nombre, tipo, ubicacion, sensores, actuadores } = req.body;

    // Validar datos
    if (!nombre || !tipo) {
      return res.status(400).json({ error: 'Nombre y tipo son obligatorios' });
    }

    const nuevoDispositivo = new Dispositivo({ nombre, tipo, ubicacion, sensores, actuadores });
    await nuevoDispositivo.save();
    res.status(201).json(nuevoDispositivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDispositivo = async (req, res) => {
  try {
    const { id } = req.params;

    // Verifica si el ID es un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'ID de dispositivo no válido' });
    }

    const dispositivo = await Dispositivo.findByIdAndUpdate(id, req.body, { new: true });

    if (!dispositivo) {
      return res.status(404).json({ msg: 'Dispositivo no encontrado' });
    }

    res.json(dispositivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDispositivo = async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByIdAndDelete(req.params.id);
    if (!dispositivo) {
      return res.status(404).json({ msg: 'Dispositivo no encontrado' });
    }
    res.json({ msg: 'Dispositivo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
