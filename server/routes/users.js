const express = require('express');
const router = express.Router();

const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require('../controllers/user.js');
const createError = require('../utils/error.js');

const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require('../utils/verifyToken.js');

router.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send('hello user, you are logged in');
});

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send({ params: req.params.id, user: req.user.id });
});

router.get('/checkadmin/:id', verifyAdmin, (req, res) => {
  res.send({
    params: req.params.id,
    user: req.user.id,
    admin: req.user.isAdmin,
  });
});

//	get all users
router.get('/', verifyAdmin, getUsers);

//	get user
router.get('/:id', verifyUser, getUser);

//	update user
router.put('/:id', verifyUser, updateUser);

//	delete user
router.delete('/:id', verifyUser, deleteUser);

module.exports = router;
