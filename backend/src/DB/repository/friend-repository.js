const userModel = require('../models/userModel');


class FriendRepository {

    async AllFriends(username) {
            try {
                const user = await userModel.findOne(username);
                //When find was used, user was returned as an array but I want it as a singular object as username is unique
                console.log("The user is : ", user);
                console.log("The user.friends is : ", user.friends);
                return user.friends;
            } catch (error){
                console,error('There was an error in fetching all the friends', error);
                throw error;
            }
    }
    async AddFriend(username,friend) {
        try {
            const {name, phone} = friend;
            const user = await userModel.findOne(username);
            const existingFriend = user.friends.find(f => f.name == name && f.phone == phone)
            if (existingFriend){
                return {
                    status: "409",
                    message: `${name} already exists as a friend`
                }
            }
            user.friends.push(friend);
            user.friendsCount = user.friends.length;

            await user.save();//save the user document
            
            return {
                status: "200",
                message: "friend added succesfully"
            }
        } catch (error){
            console.error('There was an error in adding a new friend', error);
            throw error;
        }
    }

    async deleteFriend(friend){
        try {
            const {name, id} = friend;
            const response = friendModel.find({name,id});
            if (!response){
                throw new error('The friend does not exist in your list');
            }
            const deletedFriend = await friendModel.findByIdAndDelete(id);
            if (!deletedFriend){
                throw new error('The friend does not exist on the database');
            }
            return {
                status: 200,
                message : "The friend was removed succesfully"
            }
        } catch (error){
            console.error('There was an error in removing the friend', error);
            throw error;
        }
    }
}

module.exports = FriendRepository;