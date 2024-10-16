const FriendRepository = require('../DB/repository/friend-repository')

class FriendService {
  constructor(){
    this.repository = new FriendRepository();
  }


async getAllFriend(req) {
  try {
    const response = await this.repository.AllFriends();
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
    const {name, phone} = req;
    const friend = {name, phone};
    const response = await this.repository.AddFriend(friend);
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