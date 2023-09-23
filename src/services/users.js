const userModel = require('../models/users.js');
const deleteUserById = (id) => userModel.findOneAndDelete({_id: id});
const updateUserById = (id, values) => userModel.findByIdAndUpdate(id, values);
const getUserByEmail = (email) => userModel.findOne({email});
const getUserById = (id) => userModel.findById(id);
const getUser = () => userModel.find();

module.exports = {deleteUserById, updateUserById, getUserByEmail, getUserById, getUser}
