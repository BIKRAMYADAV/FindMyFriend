const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type: String
        ,
        required: true
    },
    phone : {
        type: Number,
        required: true
    },
    friendsCount : {
        type: Number,
        required: true
    },
    fmfId : {
        type : String,
        required : true
    },
    bio : {
        type : String
    }
})

module.exports = mongoose.model('user', userSchema);