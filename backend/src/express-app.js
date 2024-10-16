const express = require('express')
const {getFriend,addFriendApi} = require('./api')
module.exports = async (app) => {
    app.use(express.json());
    // app.use(cors());
    getFriend(app);
    addFriendApi(app);
};