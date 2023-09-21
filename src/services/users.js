const UserModel = require('../models/users.js')

class UserService{
    static async getAllUsers() {
        try {
            return await UserModel.find({});
        } catch (error) {
            throw error;
        }
    }

    static async getUserById(userId) {
        try {
            return await UserModel.findById(userId);
        } catch (error) {
            throw error;
        }
    }

    static async updateUserById(userId, updatedUserData) {
        try {
            return await UserModel.findByIdAndUpdate(userId, updatedUserData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    static async deleteUserById(userId) {
        try {
            return await UserModel.findByIdAndDelete(userId);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;