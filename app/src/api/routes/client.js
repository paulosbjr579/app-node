const express = require('express');
const router = express.Router();
const controller = require('../controller/clientController')
const middleware = require('../middleware/jwtMiddleware')

router.get('/',middleware.verifyJWT, controller.findAll);
router.post('/',middleware.verifyJWT, controller.createClient);
router.get('/:id',middleware.verifyJWT, controller.findbyid);
router.put('/:id',middleware.verifyJWT, controller.updata);
router.delete('/:id',middleware.verifyJWT, controller.delete);
router.get('/findName/:name',middleware.verifyJWT, controller.findbyname);
router.delete('/all',middleware.verifyJWT, controller.deleteAll);

module.exports = router;