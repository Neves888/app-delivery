const { User } = require('../../database/models');

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = { getAllUsers };
