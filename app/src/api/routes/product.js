const express = require('express');
const router = express.Router();
const controller = require('../controller/procuctController');

router.get('/', controller.findAll);
router.post('/', controller.createProduct);
router.get('/:id', controller.findbyid);
router.put('/:id', controller.updata);
router.delete('/:id', controller.delete);
router.delete('/', controller.deleteAll);
router.get('/findByName/:name',controller.findbyName)

module.exports = router;