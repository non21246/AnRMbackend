const router = require('express').Router();
const users = require("../controllers/users.js");

router.get('/users', users.getAll);
router.get('/users/:id', users.getById);
router.patch('/users/:id', users.updateById);
router.delete('/users/:id', users.deleteById);

module.exports = router;