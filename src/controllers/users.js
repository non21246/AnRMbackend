const UserService = require("../services/users.js");

const getAllUsers = async (req, res) => {
    try {
      const users = await UserService.getUser();
      return res.status(200).json(users);
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }  
  };

const getUserById = async (req, res) => {
    try {
      const users = await UserService.getUser();
      return res.status(200).json(users);
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }  
  };
  
const deleteUserById = async (req, res) => {
    try {
      const {id} = req.params;
      const deletedUsers = await UserService.deleteUserById(id);
      if (!deletedUsers) {
        return res.status(404).json({ error: 'Not Found: User not found' });
      }
  
      return res.status(200).json(deletedUsers);
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
const updateUserById = async (req, res) => {
    try {
      const {id} = req.params;
      const {password} = req.body;
      if(!password){
        return res.sendStatus(400).json({ error: 'Bad Request: Missing required fields' });
      }
  
      const users = await UserService.getUserById(id);
      if (!users) {
        return res.status(404).json({ error: 'Not Found: User not found' });
      }
  
      users.password = password;
      const passwordUpdated = await users.save()
      return res.status(200).json(passwordUpdated).end();
  
    } catch (error) {
      console.log(error);
      return res.sendStatus(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports = {getAllUsers, getUserById, deleteUserById, updateUserById};