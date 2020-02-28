const express = require('express');
const router = express.Router();
const controller = require('../controller/clientController')
const middleware = require('../middleware/jwtMiddleware')

/**
 * @swagger
 * /client:
 *  get:
 *    tags:
 *    - "Clients"
 *    summary: "Find all client"
 *    description: Use to request all client
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/',middleware.verifyJWT, controller.findAll);

/**
 * @swagger
 *  definitions:
 *  ClientCreate:
 *       type: "object"
 *       properties:
 *          cpf:
 *              type: "string"
 *          datanasc:
 *              type: "string"
 *          name:
 *              type: "string"
 *
 * /client:
 *   post:
 *     tags:
 *     - "Clients"
 *     summary: "Create client"
 *     description: "This can only be done by the logged in client."
 *     operationId: "createClient"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Created client object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/ClientCreate"
 *     responses:
 *       default:
 *         description: "successful operation"
 */
router.post('/',middleware.verifyJWT, controller.createClient);

/**
 * @swagger
 *
 * /client/{id}:
 *   get:
 *     tags:
 *     - "Clients"
 *     summary: "Get client by id"
 *     description: ""
 *     operationId: "getClientById"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "id"
 *       in: "path"
 *       description: "The name that needs to be fetched. Use client for testing. "
 *       required: true
 *       type: "integer"
 *     responses:
 *       200:
 *         description: "successful operation"
 *       400:
 *         description: "Invalid id supplied"
 *       404:
 *         description: "Client not found"
 */
router.get('/:id',middleware.verifyJWT, controller.findbyid);

/**
 * @swagger
 *
 * /client/{Id}:
 *   put:
 *     tags:
 *     - "Clients"
 *     summary: "Updated clients"
 *     description: "This can only be done by the logged in clients."
 *     operationId: "updateClients"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: Id
 *       in: "path"
 *       description: "id that need to be updated"
 *       required: true
 *       type: "integer"
 *     - in: "body"
 *       name: "body"
 *       description: "Updated clients object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/ClientCreate"
 *     responses:
 *       400:
 *         description: "Invalid Client supplied"
 *       404:
 *         description: "Client not found"
 */
router.put('/:id',middleware.verifyJWT, controller.updata);

/**
 * @swagger
 * /client/{Id}:
 *   delete:
 *     tags:
 *     - "Clients"
 *     summary: "Delete client"
 *     description: "This can only be done by the logged in client."
 *     operationId: "deleteClientid"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: Id
 *       in: "path"
 *       description: "The name that needs to be deleted"
 *       required: true
 *       type: "integer"
 *     responses:
 *       400:
 *         description: "Invalid client supplied"
 *       404:
 *         description: "Client not found"
 */
router.delete('/:id',middleware.verifyJWT, controller.delete);

/**
 * @swagger
 *
 * /client/findName/{name}:
 *   get:
 *     tags:
 *     - "Clients"
 *     summary: "Get user by Clients"
 *     description: ""
 *     operationId: "getClientsByName"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "name"
 *       in: "path"
 *       description: "The name that needs to be fetched. Use Clients for testing. "
 *       required: true
 *       type: "string"
 *     responses:
 *       200:
 *         description: "successful operation"
 *       400:
 *         description: "Invalid id supplied"
 *       404:
 *         description: "Clients not found"
 */
router.get('/findName/:name',middleware.verifyJWT, controller.findbyname);

/**
 * @swagger
 * /client:
 *   delete:
 *     tags:
 *     - "Clients"
 *     summary: "Delete all Clients"
 *     description: "This can only be done by the logged in Clients."
 *     operationId: "deleteClients"
 *     produces:
 *     - "application/json"
 *     responses:
 *       400:
 *         description: "Invalid username supplied"
 *       404:
 *         description: "Clients not found"
 */
router.delete('/all',middleware.verifyJWT, controller.deleteAll);

module.exports = router;