const express = require('express');
const router = express.Router();
const controller = require('../controller/salesController')

/**
 * @swagger
 * /sales:
 *  get:
 *    tags:
 *    - "Sales"
 *    summary: "Find all Sales"
 *    description: Use to request all Sales
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', controller.findAll);

/**
 * @swagger
 *  definitions:
 *  SalesCreate:
 *       type: "object"
 *       properties:
 *          id_client:
 *              type: "integer"
 *          decription:
 *              type: "string"
 *
 * /sales:
 *   post:
 *     tags:
 *     - "Sales"
 *     summary: "Create sales"
 *     description: "This can only be done by the logged in Sales."
 *     operationId: "createSales"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Created Sales object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/SalesCreate"
 *     responses:
 *       default:
 *         description: "successful operation"
 */
router.post('/', controller.createSales);

/**
 * @swagger
 * /sales/{id}:
 *   get:
 *     tags:
 *     - "Sales"
 *     summary: "Get Sales by id"
 *     description: ""
 *     operationId: "getSalesById"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "id"
 *       in: "path"
 *       description: "The name that needs to be fetched. Use Sales for testing. "
 *       required: true
 *       type: "integer"
 *     responses:
 *       200:
 *         description: "successful operation"
 *       400:
 *         description: "Invalid id supplied"
 *       404:
 *         description: "Sales not found"
 */
router.get('/:id', controller.findbyid);

/**
 * @swagger
 *
 * /sales/{Id}:
 *   put:
 *     tags:
 *     - "Sales"
 *     summary: "Updated Sales"
 *     description: "This can only be done by the logged in Sales."
 *     operationId: "updateSales"
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
 *       description: "Updated Sales object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/SalesCreate"
 *     responses:
 *       400:
 *         description: "Invalid Sales supplied"
 *       404:
 *         description: "Sales not found"
 */
router.put('/:id', controller.updata);


router.delete('/:id', controller.delete);
router.get('/findIdClient/:id', controller.findIdClient);
router.get('/findIdSales/:id', controller.findIdSales);
router.get('/findItenIdSales/:id', controller.findItenIdSales);
router.delete('/', controller.deleteAll);

module.exports = router;
