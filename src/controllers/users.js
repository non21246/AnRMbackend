const UserService = require("../services/users.js");

const getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.json({ status: true, users });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await UserService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ status: false, message: 'User not found' });
        }
        res.json({ status: true, user });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

const updateUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const updatedUserData = req.body;
        const user = await UserService.updateUserById(userId, updatedUserData);
        if (!user) {
            return res.status(404).json({ status: false, message: 'User not found' });
        }
        res.json({ status: true, message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

const deleteUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await UserService.deleteUserById(userId);
        if (!user) {
            return res.status(404).json({ status: false, message: 'User not found' });
        }
        res.json({ status: true, message: 'User deleted successfully', user });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

module.exports = {getAllUsers, getUserById, updateUserById, deleteUserById};