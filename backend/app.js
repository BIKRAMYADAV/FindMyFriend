const express = require('express');
const dotenv = require('dotenv');
const { mongoConnect } = require('./configs/mongoConnection');
dotenv.config()
const PORT = process.env.PORT

const app = express();

app.listen(PORT, () => {
    mongoConnect();
    console.log(`The server is listening on port ${PORT}`);
})