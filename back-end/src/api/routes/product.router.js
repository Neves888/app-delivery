const { Router } = require('express');
const ProductController = require('../controllers/product.controller');

const productRouter = Router();

productRouter.get('/', ProductController.getAll);
productRouter.get('/:id', ProductController.getId);

module.exports = productRouter;