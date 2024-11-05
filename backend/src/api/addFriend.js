const authenticateToken = require('../middleware/auth');
const FriendService = require('../services/addFriend')
 const friendService = new FriendService()

module.exports = (app) => {
    app.post('/add-friend',authenticateToken, async (req, res, next) => {
        try {
          
            const response = await friendService.addFriend(req);
            return response;
        } catch (error){
            console.error('There was an error in adding the friend',error);
        }
    })
} 