const user = require('../../DB/models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = (app) => {
    app.post('/login', async (req, res, next) => {

        try {
            const {username,password} = req.body;
            const existingUser = await user.find({username: username});
            if (!existingUser){
               return res.status(400).json({message: "The user does not exist. Register first."});
            }
            const matchedPassword = bcrypt.compare(password,user.password);
            if(!matchedPassword){
               return res.status(400).json({message: "Invalid credentials!!"})
            }
            const token = jwt.sign({username: user.username},process.env.JWT_SECRET, {expiresIn: '3h'});
            if(token){
                res.json({token});

            } else {
                console.error('There was an error in generating the token',error);
            }


        } catch (error) {
            console.error('There was an error in logging in', error);
        }
    })
}