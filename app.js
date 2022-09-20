const express = require('express');
const cors = require('cors');
const app = express()

app.use( express.json() );
app.use( '/signup', require('./controllers/signup'));
app.use(cors());

module.exports = app;