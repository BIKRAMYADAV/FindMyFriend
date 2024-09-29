const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

const mongoConnect = async () => {
    try{
        await mongoose.connect(MONGO_URL);
        console.log('Succesfully connected to the database!');
    } catch(error){
        console.error('There was an error in connecting to the database: ',error);
    }
}

module.exports = {mongoConnect}
