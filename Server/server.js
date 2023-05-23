const express = require('express');
require('dotenv').config();
const db = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({ message : "Hello World" })
})

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})