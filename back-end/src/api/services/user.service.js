const { User } = require('../../database/models');
const md5 = require('md5');
const createToken = require('../middlewares/createToken');

const md5Decrypter = (password) => {
  const passwordDecrypted = md5(password);
  return passwordDecrypted;
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const login = async (email, passwordParams) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return null;
  const { dataValues } = user;
  const providedPassword = md5Decrypter(passwordParams);
  if (providedPassword !== dataValues.password) return null;
  const { password, ...userFilter } = dataValues;
  const token = createToken(dataValues);
  return { ...userFilter, token };
};

module.exports = { getAllUsers, login };
