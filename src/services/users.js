const userModel = require('../models/users.js');
class UserService {
  
    async getUsers() {
      try {
        const users = await userModel.find({});
        return users;
      } catch (error) {
        throw error;
      }
    }
  
    async getUserById(studentID) {
      try {
        const user = await userModel.findOne({ studentID });
        return user;
      } catch (error) {
        throw error;
      }
    }
  
    async updateUser(userId, updatedData) {
      try {
        const updatedUser = await userModel.findByIdAndUpdate(userId, updatedData, { new: true });
        return updatedUser;
      } catch (error) {
        throw error;
      }
    }
  
    async deleteUser(userId) {
      try {
        const deletedUSer = await userModel.findByIdAndDelete(userId);
        return deletedUser;
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = new UserService();
