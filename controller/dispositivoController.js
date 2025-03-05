const mongoose = require('mongoose');
const Dispositivo = require('../models/DispositivoModel');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Crear una instancia del puerto serial con la nueva API
const port = new SerialPort({
  path: 'COM3', // Asegúrate de que este sea el puerto correcto
  baudRate: 9600,
});

port.on('open', () => {
  console.log('Puerto serial abierto correctamente');
});

port.on('error', (err) => {
  console.error('Error al abrir el puerto serial:', err);
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// Función para recibir datos de Arduino
parser.on('data', (data) => {
  console.log('Datos desde Arduino:', data);
  // Aquí puedes procesar los datos recibidos, como almacenarlos en la base de datos o actualizar un dispositivo.
});

// Controlador para obtener todos los dispositivos
exports.getAllDispositivos = async (req, res) => {
  try {
    const dispositivos = await Dispositivo.find();
    res.json(dispositivos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un dispositivo por su ID
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

// Controlador para crear un dispositivo
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

// Controlador para actualizar un dispositivo
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

// Controlador para eliminar un dispositivo
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
