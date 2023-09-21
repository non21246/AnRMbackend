const UserModel = require('../models/users.js');

class UserService {
  static async getAllUsers() {
    try {
      const users = await UserModel.find({});
      return users;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(userId) {
    try {
      const user = await UserModel.findById(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updateUserById(userId, updatedUserData) {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedUserData, { new: true });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUserById(userId) {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(userId);
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
