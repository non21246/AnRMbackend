const router = require('express').Router();
const users = require('../controllers/users.js');

router.get('/', (req, res) => {
  res.status(200).send('Welcome to the Activity and Risk Management');
});

router.get('/users', users.getUsers);
router.get('/users/:id', users.getUserById);
router.patch('/users/:id', users.updateUser);
router.delete('/users/:id', users.deleteUser);

module.exports = router;
