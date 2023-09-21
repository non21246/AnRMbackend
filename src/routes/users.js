const router = require('express').Router();
const users = require('../controllers/users.js');

router.get('/', (req, res) => {
  res.status(200).send('Welcome to the users API');
});

router.get('/users', users.getAllUsers);
router.get('/users/:id', users.getUserById);
router.patch('/users/:id', users.updateUserById);
router.delete('/users/:id', users.deleteUserById);

module.exports = router;
