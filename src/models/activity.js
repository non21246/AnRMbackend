const db = require("../configs/db.js");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const activitySchema = new Schema({
    name: {
        Type: String,
        required: true
    },
    type: {
        Type: String,
        required: true
    },
    startDate: {
        Type: Date,
        required: true
    },
    endDate: {
        Type: Date,
        required: true
    },
    organizer: {
        Type: String,
        required: true
    },
    description: {
        Type: String,
        required: true
    },
    minUser: {
        Type: Number,
        default: 0
    },
    maxUser: {
        Type: Number,
        required: true
    },
},{timestamps: true});

const ActivityModel = db.model('user', activitySchema);
module.exports = ActivityModel;