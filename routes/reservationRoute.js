const express = require('express');
const router = express.Router();

const Reservation = require('../models/Reservation');

// @route   GET /getreservations
// @desc    get all reservation
router.get('/getreservations', (req, res) => {
    console.log("getreservations route hit");
    Reservation.find({}).then(reservation => {
            res.send(reservation);
        }
    )
});

// @route   POST /create
// @desc    make a reservation
router.post('/create', (req, res) => {
        const {user, room, from_date, till_date} = req.body;

        if (!user || !room || !from_date || !till_date) {
            return res.status(400).json({msg: 'Pleas enter all fields.'})
        }

        const newReservation = new Reservation({
            user,
            room,
            from_date,
            till_date
        });

        newReservation.save()
            .then(
                console.log('New reservation saved!'),
                res.status(201).json({msg: "New reservation saved!"})
            )
            .catch((err) => {
                console.log(err)
            });
    }
);

module.exports = router;