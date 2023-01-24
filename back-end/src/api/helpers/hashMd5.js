const md5 = require('md5');

const generateHashMd5 = (password) => {
  const hash = md5(password);
  return hash;
}

module.exports = generateHashMd5;