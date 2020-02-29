const express = require('express');
const router = express.Router();
const controller = require('../controller/procuctController');

/**
 * @swagger
 * /product:
 *  get:
 *    tags:
 *    - "Product"
 *    summary: "Find all Product"
 *    description: Use to request all Product
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', controller.findAll);

/**
 * @swagger
 *  definitions:
 *  ProductCreate:
 *       type: "object"
 *       properties:
 *          name:
 *              type: "string"
 *          value:
 *              type: "number"
 *
 * /product:
 *   post:
 *     tags:
 *     - "Product"
 *     summary: "Create Product"
 *     description: "This can only be done by the logged in Product."
 *     operationId: "createProduct"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Created Product object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/ProductCreate"
 *     responses:
 *       default:
 *         description: "successful operation"
 */
router.post('/', controller.createProduct);

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     tags:
 *     - "Product"
 *     summary: "Get product by id"
 *     description: ""
 *     operationId: "getProductById"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "id"
 *       in: "path"
 *       description: "The name that needs to be fetched. Use product for testing. "
 *       required: true
 *       type: "integer"
 *     responses:
 *       200:
 *         description: "successful operation"
 *       400:
 *         description: "Invalid id supplied"
 *       404:
 *         description: "product not found"
 */
router.get('/:id', controller.findbyid);

/**
 * @swagger
 *
 * /product/{Id}:
 *   put:
 *     tags:
 *     - "Product"
 *     summary: "Updated Product"
 *     description: "This can only be done by the logged in Product."
 *     operationId: "updateProduct"
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
 *       description: "Updated Product object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/ProductCreate"
 *     responses:
 *       400:
 *         description: "Invalid Sales supplied"
 *       404:
 *         description: "Product not found"
 */
router.put('/:id', controller.updata);

/**
 * @swagger
 * /product/{Id}:
 *   delete:
 *     tags:
 *     - "Product"
 *     summary: "Delete Product"
 *     description: "This can only be done by the logged in Product."
 *     operationId: "deleteProductid"
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
 *         description: "Invalid Product supplied"
 *       404:
 *         description: "Product not found"
 */
router.delete('/:id', controller.delete);

/**
 * @swagger
 * /product:
 *   delete:
 *     tags:
 *     - "Product"
 *     summary: "Delete all Product"
 *     description: "This can only be done by the logged in Product."
 *     operationId: "deleteProduct"
 *     produces:
 *     - "application/json"
 *     responses:
 *       400:
 *         description: "Invalid Product supplied"
 *       404:
 *         description: "Product not found"
 */
router.delete('/', controller.deleteAll);

/**
 * @swagger
 * /product/{name}:
 *   get:
 *     tags:
 *     - "Product"
 *     summary: "Get product by id"
 *     description: ""
 *     operationId: "getProductById"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "name"
 *       in: "path"
 *       description: "The name that needs to be fetched. Use product for testing. "
 *       required: true
 *       type: "string"
 *     responses:
 *       200:
 *         description: "successful operation"
 *       400:
 *         description: "Invalid id supplied"
 *       404:
 *         description: "product not found"
 */
router.get('/findByName/:name',controller.findbyName)

module.exports = router;