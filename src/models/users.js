const db = require("../configs/db.js");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    studentID: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Ms"]
    },
    firstname: {
        type: String,
        required: [true, "Firstname can't be empty!"]
    },
    lastname: {
        type: String,
        required: [true, "Lastname can't be empty!"]
    },
    faculty: {
        type: String,
        required: [true, "Faculty can't be empty!"]
    },
    major: {
        type: String,
        required: [true, "Major can't be empty!"]
    },
    riskLevel: {
        type: String,
        required: true,
        enum: ["High", "Medium", "Low"]
    }
},{timestamps: true});

// userSchema.pre("save", async function(){
//     var user = this;
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hash = await bcrypt.hash(user.password, salt);
//         user.password = hash;
//     } catch (error) {
//         throw error;
//     }
// });
const userModel = db.model('user', userSchema);
module.exports = userModel;