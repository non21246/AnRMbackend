const router = require('express').Router();
const users = require('../controllers/users.js');

router.get('/', (req, res) => {
  res.status(200).send('Welcome to the users API');
});

router.post('/users/create', users.createUser)
router.get('/users', users.getUsers);
router.get('/users/:id', users.getUserById);
router.patch('/users/:id', users.updateUser);
router.delete('/users/:id', users.deleteUser);

module.exports = router;
