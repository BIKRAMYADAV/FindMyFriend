const friendModel = require('../models/friendModel')

class friendRepository {
    async AllFriends() {
            try {
                const data = await friendModel.find();
                return data;
            } catch (error){
                console,error('There was an error in fetching all the friends', error);
                throw error;
            }
    }
    async AddFriend(friend) {
        try {
            const {name, id} = friend;
            const existingFriend = await friendModel.findOne({name,id});
            if (existingFriend){
                return {
                    status: "409",
                    message: `${name} already exists as a friend`
                }
            }
            const response = new friendModel({...friend});
            await response.save();
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

module.exports = friendRepository;