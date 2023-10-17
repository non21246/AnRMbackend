const activityService = require('../services/activity.js');

class ActivityController {
  async createActivity(req, res) {
    try {
      const activityData = req.body;
      const createdActivity = await activityService.createActivity(activityData);
      res.status(200).json({message: 'Create successful'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getActivities(req, res) {
    try {
      const activities = await activityService.getActivities();
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getActivityById(req, res) {
    try {
      const activityId = req.params.id;
      const activity = await activityService.getActivityById(activityId);
      if (!activity) {
        return res.status(404).json({ error: 'Activity not found' });
      }
      res.status(200).json(activity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateActivity(req, res) {
    try {
      const activityId = req.params.id;
      const updatedData = req.body;
      const updatedActivity = await activityService.updateActivity(activityId, updatedData);
      if (!updatedActivity) {
        return res.status(404).json({ error: 'Activity not found' });
      }
      res.status(200).json({message: 'Update successful'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteActivity(req, res) {
    try {
      const activityId = req.params.id;
      const deletedActivity = await activityService.deleteActivity(activityId);
      if (!deletedActivity) {
        return res.status(404).json({ error: 'Activity not found' });
      }
      res.status(200).json({message: 'Delete successful'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ActivityController();
