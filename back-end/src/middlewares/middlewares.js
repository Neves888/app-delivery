class Middlewares {
  static corsOrigin(req, _res, next) {
  req.headers.origin = req.headers.origin || req.headers.host;
  next();
}
}

module.exports = Middlewares;