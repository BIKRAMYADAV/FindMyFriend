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
    password:{
        type: String,
        required: true
    },
    friendsCount : {
        type: Number,
        
    },
    friends: {
        type: Array,
        default: []
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