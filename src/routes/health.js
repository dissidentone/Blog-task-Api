const express = require('express');
const router = express.Router();
const { getHealth } = require('../controllers/healthController');

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Check API health
 *     description: Returns the current status of the API
 *     responses:
 *       200:
 *         description: API is running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: API is running
 *                 time:
 *                   type: string
 *                   format: date-time
 */
router.get('/', getHealth);

module.exports = router;
