const express = require('express');
const {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} = require('../controllers/room.js');
const { verifyAdmin } = require('../utils/verifyToken.js');

const router = express.Router();
//CREATE
router.post('/:hotelid', verifyAdmin, createRoom);

//UPDATE
router.put('/:id', verifyAdmin, updateRoom);
//DELETE
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
//GET

router.get('/:id', getRoom);
//GET ALL

router.get('/', getRooms);

module.exports = router;