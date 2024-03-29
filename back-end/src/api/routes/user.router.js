const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const loginRouter = Router();

loginRouter.get('/', UserController.getAllUsers);
loginRouter.post('/', UserController.login);

module.exports = loginRouter;
