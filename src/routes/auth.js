const router = require('express').Router();
const auth = require('../controllers/auth.js');

router.post('/auth/register', auth.register);
router.post('/auth/login', auth.login);

module.exports = router;
