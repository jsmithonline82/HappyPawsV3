const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Reservation = require('../../models/Reservation');

// @route   GET api/reservations
// @desc    Get All Reservations
// @access  Public
// router.get('/', (req, res) => {
//   Item.find()
//     .sort({ date: -1 })
//     .then(items => res.json(items));
// });

router.get('/', auth, (req, res) => {
  Reservation.find({
    userId: req.user.id
  })
    .sort({ date: -1 })
    .then(reservation => {
      console.log(reservation)
      res.json(reservation)

    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    });
});

// @route   POST api/reservations
// @desc    Create A Reservation
// @access  Private
router.post('/', auth, (req, res) => {
  const newReservation = new Reservation({
    name: req.body.name,
    time: req.body.time,
    date: req.body.date,
    service: req.body.service,
    userId: req.user.id
  });

  newReservation.save().then(reservation => res.json(reservation));
});

// @route   DELETE api/reservations/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Reservation.findById(req.params.id)
    .then(reservation => reservation.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
