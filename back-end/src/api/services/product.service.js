const { Product } = require('../../database/models');

const getAll = async () => {
  const users = await Product.findAll();
  return users;
};

const getId = async (id) => {
  const onePoduct = await Product.findByPk(id);
  return onePoduct;
};

module.exports = { getAll, getId };