const express = require('express');
const router = express.Router();
const controller = require('../controller/usersController');
const middleware = require('../middleware/jwtMiddleware')

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *    - "Users"
 *    summary: "Find all user"
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', middleware.verifyJWT, controller.findAll);


/**
 * @swagger
 *  definitions:
 *  UserCreate:
 *       type: "object"
 *       properties:
 *          user:
 *              type: "string"
 *          pass:
 *              type: "string"
 *
 * /users:
 *   post:
 *     tags:
 *     - "Users"
 *     summary: "Create user"
 *     description: "This can only be done by the logged in user."
 *     operationId: "createUser"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Created user object"
 *       required: true
 *       schema:
 *         $ref: "#/definitions/UserCreate"
 *     responses:
 *       default:
 *         description: "successful operation"
 */
router.post('/',middleware.verifyJWT, controller.createUser);

/**
 * @swagger
 *
 * /users/{id}:
 *   get:
 *     tags:
 *     - "Users"
 *     summary: "Get user by id"
 *     description: ""
 *     operationId: "getUserById"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "id"
 *       in: "path"
 *       description: "The name that needs to be fetched. Use user1 for testing. "
 *       required: true
 *       type: "integer"
 *     responses:
 *       200:
 *         description: "successful operation"
 *       400:
 *         description: "Invalid id supplied"
 *       404:
 *         description: "User not found"
 */
router.get('/:id',middleware.verifyJWT, controller.findbyid);

/**
* @swagger
*  definitions:
*  UserUp:
*       type: "object"
*       properties:
*          user:
*              type: "string"
*          pass:
*              type: "string"
*          active:
*              type: "boolean"
*
* /users/{userId}:
*   put:
*     tags:
*     - "Users"
*     summary: "Updated user"
*     description: "This can only be done by the logged in user."
*     operationId: "updateUser"
*     produces:
*     - "application/json"
*     parameters:
*     - name: userId
*       in: "path"
*       description: "id that need to be updated"
*       required: true
*       type: "integer"
*     - in: "body"
*       name: "body"
*       description: "Updated user object"
*       required: true
*       schema:
*         $ref: "#/definitions/UserUp"
*     responses:
*       400:
*         description: "Invalid user supplied"
*       404:
*         description: "User not found"
*/
router.put('/:id',middleware.verifyJWT, controller.updata);

/**
 * @swagger
 * /users/{userId}:
 *   delete:
 *     tags:
 *     - "Users"
 *     summary: "Delete user"
 *     description: "This can only be done by the logged in user."
 *     operationId: "deleteUserid"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: userId
 *       in: "path"
 *       description: "The name that needs to be deleted"
 *       required: true
 *       type: "integer"
 *     responses:
 *       400:
 *         description: "Invalid username supplied"
 *       404:
 *         description: "User not found"
 */
router.delete('/:id',middleware.verifyJWT, controller.delete);

/**
 * @swagger
 *
 * /users/findName/{name}:
 *   get:
 *     tags:
 *     - "Users"
 *     summary: "Get user by user"
 *     description: ""
 *     operationId: "getUserByName"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "name"
 *       in: "path"
 *       description: "The name that needs to be fetched. Use user1 for testing. "
 *       required: true
 *       type: "string"
 *     responses:
 *       200:
 *         description: "successful operation"
 *       400:
 *         description: "Invalid id supplied"
 *       404:
 *         description: "User not found"
 */
router.get('/findName/:user',middleware.verifyJWT, controller.findbyname);

/**
 * @swagger
 * /users:
 *   delete:
 *     tags:
 *     - "Users"
 *     summary: "Delete all user"
 *     description: "This can only be done by the logged in user."
 *     operationId: "deleteUser"
 *     produces:
 *     - "application/json"
 *     responses:
 *       400:
 *         description: "Invalid username supplied"
 *       404:
 *         description: "User not found"
 */
router.delete('/',middleware.verifyJWT, controller.deleteAll);

module.exports = router;