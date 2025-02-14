const express = require('express');
const router = express.Router();
const eventoController = require('../controller/eventoController');

router.get('/get', eventoController.getAllEventos);
router.post('/create', eventoController.createEvento);
router.get('/get/:id', eventoController.getEventoById);
router.put('/update/:id', eventoController.updateEvento);
router.delete('/delete/:id', eventoController.deleteEvento);

module.exports = router;