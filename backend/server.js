const express = require('express');
const dotenv = require('dotenv');
const { mongoConnect } = require('./configs/mongoConnection');
dotenv.config()
const PORT = process.env.PORT
const router = require('./routes/addFriend')

const app = express();

app.use(router);

app.listen(PORT, () => {
    mongoConnect();
    console.log(`The server is listening on port ${PORT}`);
})