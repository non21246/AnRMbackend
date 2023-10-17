const db = require("../configs/db.js");
const mongoose = require("mongoose");
const {Schema} = mongoose;

const activitySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    place:{
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{timestamps: true});

const ActivityModel = db.model('activity', activitySchema);
module.exports = ActivityModel;