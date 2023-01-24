const { createUsers } = require('../services/register.service');

const postNewUsers = async (req, res) => {
  const { body } = req;
  const newUser = {...body, role: 'customer'};
  const users = await createUsers(newUser);
  return res.status(200).json(users);
};

module.exports = { postNewUsers };
