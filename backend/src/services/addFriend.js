const FriendRepository = require('../DB/repository/friend-repository')

class FriendService {
  constructor(){
    this.repository = new FriendRepository();
  }


async getAllFriend(req) {
  try {
  const {username} = req.userInfo;
    const response = await this.repository.AllFriends(username);
    console.log("The response in addFriend.js: ",response);
    return {
      status: 200,
      data: response
    }
  } catch (error){
    console.error(error);
    return {
      status : 500,
      message : "Cannot get al friends"
    }
  }
}

async addFriend (req) {
  try {
    const username = req.userInfo;
    const {name, phone} = req.body;
    const friend = {name, phone};
    const response = await this.repository.AddFriend(username,friend);
    return response;
  } catch (error) {
    console.error(error);
    return {
      status : 500,
      message : "cannot create new friend"
    }
  }
}

async deleteFriend (req) {
  try {
    const {id} = req.params;
    const {email} = req.userInfo;
    const response = await this.repository.deleteFriend()
  } catch (error){
    console.error('There was an error in deleting the friend', error);
    throw error;
  }
}
}

module.exports = FriendService;