const UserModel = require('../models/users.js')
const bcrypt = require('bcrypt');

class AuthService{
    static async loginUser(email, password) {
        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                throw new Error("Email not found");
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Passwords is incorrect");
            }

            return user;
        } catch (error) {
            throw error;
        }
    }
    static async registerUser(email, password){
        try {
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                throw new Error("Email already registered");
            }
            
            const createUser = new UserModel({email, password});
            return createUser.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthService;