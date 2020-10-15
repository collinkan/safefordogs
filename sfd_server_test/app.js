const express = require('express');
const app = express();

//Routes
const itemRoutes = require('./api/routes/items')

app.use('/items', itemRoutes);

module.exports = app;