const ActivityModel = require('../models/activity.js');

class ActivityService {
  async createActivity(activityData) {
    try {
      const newActivity = new ActivityModel(activityData);
      const savedActivity = await newActivity.save();
      return savedActivity;
    } catch (error) {
      throw error;
    }
  }

  async getActivities() {
    try {
      const activities = await ActivityModel.find({});
      return activities;
    } catch (error) {
      throw error;
    }
  }

  async getActivityById(activityId) {
    try {
      const activity = await ActivityModel.findById(activityId);
      return activity;
    } catch (error) {
      throw error;
    }
  }

  async updateActivity(activityId, updatedData) {
    try {
      const updatedActivity = await ActivityModel.findByIdAndUpdate(activityId, updatedData, { new: true });
      return updatedActivity;
    } catch (error) {
      throw error;
    }
  }

  async deleteActivity(activityId) {
    try {
      const deletedActivity = await ActivityModel.findByIdAndDelete(activityId);
      return deletedActivity;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ActivityService();
