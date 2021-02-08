const express = require('express');
const pool = require('./db');

const app = express();

//arrow function call back function
app.get('/monsters', (request, response, next) => {
    pool.query('SELECT * FROM foo ORDER BY id ASC', (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });

});

//middlewares
app.use((err, req, res, next) => {
    res.json(err);
});

module.exports = app;

