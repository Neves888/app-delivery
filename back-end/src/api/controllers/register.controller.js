const { createUsers } = require('../services/register.service');

const postNewUsers = async (req, res) => {
  try {
    const { body } = req;
    const newUser = {...body, role: 'customer'};
    const users = await createUsers(newUser);
    return res.status(201).json(users);
  } catch (error) {
    return res.status(409).json({ message: 'Erro'})
  }
};

module.exports = { postNewUsers };
