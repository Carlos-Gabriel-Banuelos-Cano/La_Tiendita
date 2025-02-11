const Dispositivo = require('../models/Dispositivo');

exports.getDispositivos = async (req, res) => {
  const dispositivos = await Dispositivo.find();
  res.json(dispositivos);
};

exports.createDispositivo = async (req, res) => {
  const nuevoDispositivo = new Dispositivo(req.body);
  await nuevoDispositivo.save();
  res.status(201).json(nuevoDispositivo);
};
