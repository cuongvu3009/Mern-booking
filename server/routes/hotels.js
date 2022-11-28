const express = require('express');
const {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,

  getHotels,
  updateHotel,
} = require('../controllers/hotel.js');
const Hotel = require('../models/Hotel.js');
const { verifyAdmin } = require('../utils/verifyToken.js');
const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createHotel);

//UPDATE
router.put('/:id', verifyAdmin, updateHotel);
//DELETE
router.delete('/:id', verifyAdmin, deleteHotel);
//GET

router.get('/find/:id', getHotel);
//GET ALL

router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);

module.exports = router;