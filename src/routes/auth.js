const router = require('express').Router();
const userController = require('../controllers/auth.js');

router.post('/auth/register', userController.register);
router.post('/auth/login', userController.login);

module.exports = router;
