const user = require('../../DB/models/userModel');
const bcrypt = require('bcrypt');

module.exports = (app) => {
    app.post('/register', async (req, res, next) => {
        const { username, password, phone} = req.body;
        try {
            const existingUser = await user.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists, login instead" });
            }
            //generating a unique fmf id
            const fmfId = `fmf${username}${phone[2]}`;

            const hashedPassword = await bcrypt.hash(password, 10);
            const friendsCount = 0;
            const newUser = new user({ username, password: hashedPassword, phone,friendsCount,fmfId });
            const savedUser = await newUser.save();
            if (savedUser) {
                res.status(200).json({ message: "new user added successfully !!!" });
            }
        } catch (error) {
            console.error('There was an error in adding the new user', error);
        }
    })
}