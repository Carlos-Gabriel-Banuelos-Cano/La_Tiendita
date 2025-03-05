const express = require('express');
const router = express.Router();
const eventoController = require('../controller/eventoController');

/**
 * @swagger
 * tags:
 *   name: Eventos
 *   description: Operaciones relacionadas con los eventos
 */

/**
 * @swagger
 * /eventos/get:
 *   get:
 *     summary: Obtener todos los eventos
 *     tags: [Eventos]
 *     responses:
 *       200:
 *         description: Lista de eventos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   fecha:
 *                     type: string
 *                     format: date
 *                   tipo_evento:
 *                     type: string
 *                   sensor_id:
 *                     type: string
 *                   actuador_id:
 *                     type: string
 *                   descripcion:
 *                     type: string
 *       500:
 *         description: Error del servidor
 */
router.get('/get', eventoController.getAllEventos);

/**
 * @swagger
 * /eventos/create:
 *   post:
 *     summary: Crear un nuevo evento
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *               tipo_evento:
 *                 type: string
 *                 enum: [tipo1, tipo2, tipo3]
 *               sensor_id:
 *                 type: string
 *               actuador_id:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Evento creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 */
router.post('/create', eventoController.createEvento);

/**
 * @swagger
 * /eventos/get/{id}:
 *   get:
 *     summary: Obtener un evento por su ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del evento
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Evento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fecha:
 *                   type: string
 *                   format: date
 *                 tipo_evento:
 *                   type: string
 *                 sensor_id:
 *                   type: string
 *                 actuador_id:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/get/:id', eventoController.getEventoById);

/**
 * @swagger
 * /eventos/update/{id}:
 *   put:
 *     summary: Actualizar un evento por su ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del evento
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date
 *               tipo_evento:
 *                 type: string
 *                 enum: [tipo1, tipo2, tipo3]
 *               sensor_id:
 *                 type: string
 *               actuador_id:
 *                 type: string
 *               descripcion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Evento actualizado exitosamente
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/update/:id', eventoController.updateEvento);

/**
 * @swagger
 * /eventos/delete/{id}:
 *   delete:
 *     summary: Eliminar un evento por su ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del evento
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Evento eliminado exitosamente
 *       404:
 *         description: Evento no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/delete/:id', eventoController.deleteEvento);

module.exports = router;
