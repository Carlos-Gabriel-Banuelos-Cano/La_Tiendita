const express = require('express');
const router = express.Router();
const dispositivoController = require('../controller/dispositivoController');

router.get('/get/:id', dispositivoController.getDispositivoById);
router.put('/update/:id', dispositivoController.updateDispositivo);
router.delete('/delete/:id', dispositivoController.deleteDispositivo);


module.exports = router;