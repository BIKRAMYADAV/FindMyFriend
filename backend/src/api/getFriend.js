const FriendService = require('../services/addFriend')

module.exports = (app) => {
    app.get('/get-friends', async (req, res, next) => {
        try {
            const response = await FriendService.getAllFriend();
            return response.json();
        } catch (error) {
            console.error("There was an error in getting all the friends", error);
        }
    })
}