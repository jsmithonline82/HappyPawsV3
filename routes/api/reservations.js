const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Item = require('../../models/Reservation');

// @route   GET api/reservations
// @desc    Get All Reservations
// @access  Public
router.get('/reservations', (req, res) => {
  Item.find(req.params.id)
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/reservations
// @desc    Create A Reservation
// @access  Private
router.post('/', auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    breed: req.body.breed,
    weight: req.body.weight,
    image: req.body.image
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/reservations/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;