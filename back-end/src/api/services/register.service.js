const { User } = require('../../database/models');

const createUsers = async ({ name, email, password, role }) => {
  const users = await User.create({
    name,
    email,
    password,
    role,
  });
  return users;
};

module.exports = { createUsers };
