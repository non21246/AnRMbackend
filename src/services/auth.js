const userModel = require('../models/users.js');
const bcrypt = require('bcrypt');

class UserService {
  async registerUser(userData) {
    try {
      const user = new userModel(userData);
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email, password) {
    try {
      const user = await userModel.findOne({ email });
      if (!user) {
        return null;
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        return user;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
