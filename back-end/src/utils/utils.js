const { CORS_WHITELIST } = require('./constants');

const corsOptions = {
  origin: (origin, callback) => {
    // console.log(origin)
    if (CORS_WHITELIST.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
module.exports = {
  corsOptions,
};