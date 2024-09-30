// const express = require('express');
// const { addFriend } = require('../services/addFriend');
// const router = express.Router();

// router.get('friends', (req, res) => {
//     res.send("Here is the list of the friends");
// })

// router.post('/add-friend', (req, res) => {
//     const friend = req.body;
//     addFriend(friend);
// })

// module.exports = router;
module.exports = (app) => {
    app.post('/add-friend', (req, res, next) => {
        
    })
}