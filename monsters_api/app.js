const express = require('express');
const bodyParser = require('body-parser');
const monsters = require('./routes/monsters');
const habitats = require('./routes/habitats');

const app = express();

//middlewares always before the routes, so they can access them.
app.use(bodyParser.json());

//routers
app.use('/monsters', monsters);
app.use('/habitats', habitats);

//error Handling
app.use((err, req, res, next) => {
    res.json(err);
});

module.exports = app;

