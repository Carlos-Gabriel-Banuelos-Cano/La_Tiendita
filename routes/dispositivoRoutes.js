const express = require('express');
const router = express.Router();
const dispositivoController = require('../controllers/dispositivoController');

router.get('/', dispositivoController.getDispositivos);
router.post('/', dispositivoController.createDispositivo);

module.exports = router;