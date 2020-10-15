const express = require('express');
const app = express();
const body_parser = require('body-parser')

//Routes
const item_routes = require('./api/routes/items')

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.use('/items', item_routes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;