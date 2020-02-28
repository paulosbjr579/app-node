const express = require('express');
const router = express.Router();
const controller = require('../controller/salesItensControlls')

router.get('/', controller.findAll);
router.post('/', controller.createSales);
router.get('/:id', controller.findbyid);
router.put('/:id', controller.updata);
router.delete('/:id', controller.delete);
router.delete('/', controller.deleteAll);

module.exports = router;