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
    },
    phoneNumber : {
        type: Number,
        required: true
    }
})

const friendModel = mongoose.model('friendModel', friendSchema);