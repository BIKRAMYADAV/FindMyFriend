const authenticateToken = require('../middleware/auth');
const FriendService = require('../services/addFriend')
const friendService = new FriendService()

module.exports = (app) => {
    app.get('/get-friends',authenticateToken, async (req, res, next) => {
        try {
            
            const response = await friendService.getAllFriend(req);
            console.log("The response recieved is: ",response);
            return response.data;
        } catch (error) {
            console.error("There was an error in getting all the friends", error);
        }
    })
}