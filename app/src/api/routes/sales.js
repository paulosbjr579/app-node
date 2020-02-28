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


router.post('/', controller.createSales);
router.get('/:id', controller.findbyid);
router.put('/:id', controller.updata);
router.delete('/:id', controller.delete);
router.get('/findIdClient/:id', controller.findIdClient);
router.get('/findIdSales/:id', controller.findIdSales);
router.get('/findItenIdSales/:id', controller.findItenIdSales);
router.delete('/', controller.deleteAll);

module.exports = router;
