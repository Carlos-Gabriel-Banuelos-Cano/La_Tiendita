const express = require('express');
const router = express.Router();
const eventoController = require('../controller/eventoController');

router.get('/', eventoController.getEventos);
router.post('/', eventoController.createEvento);

module.exports = router;