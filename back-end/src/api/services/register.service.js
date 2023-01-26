const { User } = require('../../database/models');
const generateHashMd5 = require('../helpers/hashMd5');

const createUsers = async ({ name, email, password, role }) => {
  const users = await User.create({
    name,
    email,
    password: generateHashMd5(password),
    role,
  });
  return users;
};

module.exports = { createUsers };