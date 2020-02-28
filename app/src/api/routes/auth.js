const express = require('express');
const router = express.Router();
const controller = require('../controller/authController')

/**
 * @swagger
 *  definitions:
 *  UserLogin:
 *       type: "object"
 *       properties:
 *          user:
 *              type: "string"
 *          pass:
 *              type: "string"
 *
 * /auth/login:
 *   post:
 *     tags:
 *     - "Auth"
 *     summary: "Login user"
 *     description: "This can only be done by the logged in user."
 *     operationId: "UserLogin"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Login user object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/UserLogin"
 *     responses:
 *       default:
 *         description: "successful operation"
 */
router.post('/login', controller.login);

module.exports = router;