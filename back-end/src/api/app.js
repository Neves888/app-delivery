const express = require('express');
const cors = require('cors');

const loginRouter = require('./routes/user.router');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);

module.exports = app;
