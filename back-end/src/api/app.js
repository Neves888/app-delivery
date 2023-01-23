const express = require('express');
const cors = require('cors');

const Middlewares = require('../middlewares/middlewares');

const loginRouter = require('./routes/user.router');
const { corsOptions } = require('../utils/utils');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(Middlewares.corsOrigin);

app.use(cors(corsOptions));

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);
/* app.get('/', (_req, res) => res.status(200).json({ message: 'foi' })); */

module.exports = app;
