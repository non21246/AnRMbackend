const db = require("../configs/db.js");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    fisrtname: {
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
    phone: {
        type: String,
        required: [true, "Phone can't be empty!"]
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Email format is not correct!"
        ],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password can't be empty!"]
    },
    userLevel: {
        type: String,
        required: true
    }
},{timestamps: true});

userSchema.pre("save", async function(){
    var user = this;
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    } catch (error) {
        throw error;
    }
});
const userModel = db.model('user', userSchema);
module.exports = userModel;