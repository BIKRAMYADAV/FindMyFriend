const express = require('express')
const {getFriend,addFriendApi, register, login} = require('./api')
module.exports = async (app) => {
    app.use(express.json());
    getFriend(app);
    addFriendApi(app);
    register(app);
    login(app);
};