"use strict";

const express = require('express');

const app = module.exports = express();

app.use(express.static('www'));

app.get('/users', (req, res) => {
});

app.get('/users/:id', (req, res) => {
});

app.post('/users', (req, res) => {
});

app.delete('/users/:id', (req, res) => {
});

