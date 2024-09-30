const friendRepository = require('../DB/repository/friend-repository')

class FormService {
  constructor(){
    this.repository = new friendRepository();
  }


async getAllFriend(req) {
  try {
    const {email} = req.userInfo;
    const response = await this.repository.getAllFriend();
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

async addNewFriend (req) {
  try {
    const {name, phoneNumber} = req.body;
    const {email} = req.userInfo;
    const friend = {name, phoneNumber};
    const response = await this.repository.AddFriend(data);
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
  }
}
}