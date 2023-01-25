const jwt = require('jsonwebtoken');
const jwtKey = require('fs').readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

module.exports = (info) => {
  const jwtConfig = { algorithm: 'HS256', expiresIn: '45min' };
  const token = jwt.sign({ ...info }, jwtKey, jwtConfig);
  return token;
};
