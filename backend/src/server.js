const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const { mongoUrl } = require('./config');

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);