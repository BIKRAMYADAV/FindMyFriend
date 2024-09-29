const mongoose = require('mongoose')

const friendSchema = new mongoose.Schema({
    name : {
        type: String
        ,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})