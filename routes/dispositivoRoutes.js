const express = require('express');
const router = express.Router();
const dispositivoController = require('../controller/dispositivoController');

router.get('/get', dispositivoController.getAllDispositivos);
router.get('/get/:id', dispositivoController.getDispositivoById);
router.put('/update/:id', dispositivoController.updateDispositivo);
router.post('/create', dispositivoController.createDispositivo);
router.delete('/delete/:id', dispositivoController.deleteDispositivo);


module.exports = router;