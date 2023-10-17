const router = require('express').Router();
const activityController = require('../controllers/activity.js'); 

router.post('/act', activityController.createActivity);
router.get('/act', activityController.getActivities);
router.get('/act/:id', activityController.getActivityById);
router.patch('/act/:id', activityController.updateActivity);
router.delete('/act/:id', activityController.deleteActivity);

module.exports = router;
