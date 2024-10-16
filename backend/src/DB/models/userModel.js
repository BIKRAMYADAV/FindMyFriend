const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
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

export const userModel = mongoose.model('userModel', userSchema);