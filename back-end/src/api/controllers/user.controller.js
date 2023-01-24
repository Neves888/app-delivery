const userService = require('../services/user.service');

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login(email, password);
  if (!user) return res.status(404).json({ error: 'User not found' });
  return res.status(200).json(user);
};

module.exports = { getAllUsers, login };
