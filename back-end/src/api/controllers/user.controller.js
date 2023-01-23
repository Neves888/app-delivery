const userService = require('../services/user.service');

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const findByEmail = async (req, res) => {
  const { email } = req.body;
try {
  await userService.findByEmail({ email });
  return res.status(200).send();
} catch (error) { return res.status(error.status).json(error.message); }
};

module.exports = { getAllUsers, findByEmail };
