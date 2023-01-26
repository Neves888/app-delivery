const express = require('express');
const cors = require('cors');

// const Middlewares = require('../middlewares/middlewares');

const loginRouter = require('./routes/user.router');
// const { corsOptions } = require('../utils/utils');

const app = express();

app.use(express.urlencoded({ extended: false }));
 
app.use(express.json());

// app.use(Middlewares.corsOrigin);

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);

module.exports = app;
