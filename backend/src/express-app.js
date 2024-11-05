const express = require('express')
const {getFriend,addFriendApi, register, login} = require('./api')
const cors = require('cors');
module.exports = async (app) => {
    app.use(express.json());
    app.use(cors());
    getFriend(app);
    addFriendApi(app);
    register(app);
    login(app);
};