const { User } = require('../../database/models');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const findByEmail = async ({ email }) => {
  const userExists = await User.findOne({ where: { email } });

  if (!userExists) throw new CustomError(404, 'Not found');

  return true;
};

module.exports = { getAllUsers, getUserById };
