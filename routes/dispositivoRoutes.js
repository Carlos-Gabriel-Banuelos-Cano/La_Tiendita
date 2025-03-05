const express = require('express');
const router = express.Router();
const dispositivoController = require('../controller/dispositivoController');


// Rutas para manejar dispositivos
/**
 * @swagger
 * tags:
 *   - name: Dispositivos
 *     description: Operaciones relacionadas con los dispositivos
 */

/**
 * @swagger
 * /dispositivos/get:
 *   get:
 *     summary: Obtener todos los dispositivos
 *     tags: [Dispositivos]
 *     responses:
 *       200:
 *         description: Lista de dispositivos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dispositivo'
 *       500:
 *         description: Error del servidor
 */
router.get('/get', dispositivoController.getAllDispositivos);

/**
 * @swagger
 * /dispositivos/get/{id}:
 *   get:
 *     summary: Obtener un dispositivo por su ID
 *     tags: [Dispositivos]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del dispositivo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dispositivo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dispositivo'
 *       404:
 *         description: Dispositivo no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/get/:id', dispositivoController.getDispositivoById);

/**
 * @swagger
 * /dispositivos/create:
 *   post:
 *     summary: Crear un nuevo dispositivo
 *     tags: [Dispositivos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DispositivoInput'
 *     responses:
 *       201:
 *         description: Dispositivo creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dispositivo'
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 */
router.post('/create', dispositivoController.createDispositivo);

/**
 * @swagger
 * /dispositivos/update/{id}:
 *   put:
 *     summary: Actualizar un dispositivo por su ID
 *     tags: [Dispositivos]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del dispositivo
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DispositivoInput'
 *     responses:
 *       200:
 *         description: Dispositivo actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dispositivo'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Dispositivo no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/update/:id', dispositivoController.updateDispositivo);

/**
 * @swagger
 * /dispositivos/delete/{id}:
 *   delete:
 *     summary: Eliminar un dispositivo por su ID
 *     tags: [Dispositivos]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del dispositivo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dispositivo eliminado
 *       404:
 *         description: Dispositivo no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/delete/:id', dispositivoController.deleteDispositivo);

/**
 * @swagger
 * /dispositivos/config:
 *   post:
 *     summary: Enviar comando a Arduino
 *     tags: [Arduino]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comando:
 *                 type: string
 *                 description: Comando a enviar a Arduino
 *     responses:
 *       200:
 *         description: Comando enviado a Arduino
 *       400:
 *         description: Comando requerido
 *       500:
 *         description: Error al enviar comando a Arduino
 */
router.post('/config', (req, res) => {
  const { comando } = req.body;

  // Enviar comando a Arduino
  if (comando) {
    port.write(comando + '\n', (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al enviar comando a Arduino' });
      }
      res.status(200).json({ msg: 'Comando enviado a Arduino' });
    });
  } else {
    res.status(400).json({ error: 'Comando requerido' });
  }
});

/**
 * @swagger
 * /config:
 *   get:
 *     summary: Obtener datos desde Arduino
 *     tags: [Arduino]
 *     responses:
 *       200:
 *         description: Datos recibidos desde Arduino
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensaje de éxito
 *                 data:
 *                   type: string
 *                   description: Datos leídos desde Arduino
 *       404:
 *         description: No se recibieron datos desde Arduino
 *       500:
 *         description: Error al leer datos de Arduino
 */
router.get('/config', (req, res) => {
    // Leer datos del Arduino
    port.read((err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Error al leer datos de Arduino' });
      }
      
      if (!data) {
        return res.status(404).json({ error: 'No se recibieron datos desde Arduino' });
      }
      
      // Si los datos son recibidos, retornarlos
      res.status(200).json({ msg: 'Datos recibidos desde Arduino', data: data.toString() });
    });
  });
  

module.exports = router;
