const express = require('express');
const router = express.Router();

router.get('/add-friend', (req, res) => {
    res.send('Hello world')
})

module.exports = router;