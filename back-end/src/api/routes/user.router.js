const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const loginRouter = Router();

loginRouter.get('/', UserController.getAllUsers);

module.exports = loginRouter;
