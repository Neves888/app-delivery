const { Router } = require('express');
const routeRegister = require('./register.routs');

const routes = Router();

routes.use(routeRegister);

module.exports = routes;
