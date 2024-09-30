const FriendModel = require('../DB/models/friendModel');

const addFriend = async (friend) => {
  try {
    const newFriend = new FriendModel(friend);
    await newFriend.save();
    console.log('The new friend was added successfully');
  } catch (error) {
    console.error("Error saving the new friend:", error.message || error);
  }
};

module.exports = { addFriend };
