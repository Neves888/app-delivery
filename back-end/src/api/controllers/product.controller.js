const ProductService = require('../services/user.service');

const getAll = async (req, res) => {
  const products = await ProductService.getAll;
  return res.status(200).json(products);
};

const getId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await productService.getId(id);
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getId };