const express = require('express');
const router = express.Router();
const controller = require('../controller/salesItensControlls')

/**
 * @swagger
 * /salesitens:
 *  get:
 *    tags:
 *    - "SalesItens"
 *    summary: "Find all SalesItens"
 *    description: Use to request all SalesItens
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', controller.findAll);

/**
 * @swagger
 *  definitions:
 *  SalesItensCreate:
 *       type: "object"
 *       properties:
 *          id_product:
 *              type: "integer"
 *          qtd:
 *              type: "integer"
 *          id_sales:
 *              type: "integer"
 *
 * /salesitens:
 *   post:
 *     tags:
 *     - "SalesItens"
 *     summary: "Create SalesItens"
 *     description: "This can only be done by the logged in SalesItens."
 *     operationId: "createSalesItens"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Created SalesItens object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/SalesItensCreate"
 *     responses:
 *       default:
 *         description: "successful operation"
 */
router.post('/', controller.createSales);

/**
 * @swagger
 * /salesitens/{id}:
 *   get:
 *     tags:
 *     - "SalesItens"
 *     summary: "Get SalesItens by id"
 *     description: ""
 *     operationId: "getSalesItensById"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "id"
 *       in: "path"
 *       description: "The name that needs to be fetched. Use SalesItens for testing. "
 *       required: true
 *       type: "integer"
 *     responses:
 *       200:
 *         description: "successful operation"
 *       400:
 *         description: "Invalid id supplied"
 *       404:
 *         description: "SalesItens not found"
 */
router.get('/:id', controller.findbyid);

/**
 * @swagger
 *
 * /salesitens/{Id}:
 *   put:
 *     tags:
 *     - "SalesItens"
 *     summary: "Updated SalesItens"
 *     description: "This can only be done by the logged in SalesItens."
 *     operationId: "updateSalesItens"
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
 *       description: "Updated SalesItens object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/SalesItensCreate"
 *     responses:
 *       400:
 *         description: "Invalid Sales supplied"
 *       404:
 *         description: "SalesItens not found"
 */
router.put('/:id', controller.updata);

/**
 * @swagger
 * /salesitens/{Id}:
 *   delete:
 *     tags:
 *     - "SalesItens"
 *     summary: "Delete SalesItens"
 *     description: "This can only be done by the logged in SalesItens."
 *     operationId: "deleteSalesItensid"
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
 *         description: "Invalid SalesItens supplied"
 *       404:
 *         description: "SalesItens not found"
 */
router.delete('/:id', controller.delete);

/**
 * @swagger
 * /sales:
 *   delete:
 *     tags:
 *     - "SalesItens"
 *     summary: "Delete all SalesItens"
 *     description: "This can only be done by the logged in SalesItens."
 *     operationId: "deleteSalesItens"
 *     produces:
 *     - "application/json"
 *     responses:
 *       400:
 *         description: "Invalid SalesItens supplied"
 *       404:
 *         description: "SalesItens not found"
 */
router.delete('/', controller.deleteAll);

module.exports = router;