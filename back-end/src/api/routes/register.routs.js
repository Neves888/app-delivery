const { Router } = require('express');
const { postNewUsers } = require('../controllers/register.controller');

const routeRegister = Router();

routeRegister.post('/register', postNewUsers);

module.exports = routeRegister;