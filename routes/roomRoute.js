const express = require('express');
const router = express.Router();

const Room = require('../models/Rooms');

// @route   POST /create
// @desc    create a new room
router.post('/create', (req, res) => {
    const {room_nr, price, description, facilities, picture_name} = req.body;

    if (!room_nr || !price || !description || !facilities || !picture_name) {
        return res.status(400).json({msg: 'Pleas enter all fields.'})
    }

    Room.findOne({room_nr})
        .then(room => {
                if (room) return res.status(400).json({msg: 'RoomNr already exists.'});

                const newRoom = new Room({
                    room_nr,
                    price,
                    description,
                    facilities,
                    picture_name
                });

                newRoom.save()
                    .then(
                        console.log('New room saved!'),
                        res.status(201).json({msg: "New room saved!"})
                    )
            }
        ).catch((err) => {
        console.log(err)
    });


});

// @route   GET /getrooms
// @desc    get an array of all rooms
router.get('/getrooms', (req, res) => {
    Room.find({}).then(rooms => {
            res.send(rooms);
        }
    )
});

// @route   DELETE /deleteroom
// @desc    delete a room
router.delete('/deleteroom', (req, res) => {
    Room.findByIdAndDelete(req.body.id)
        .then( () => res.status(202).json({msg: "room deleted"} ))
        .catch((error) => res.status(400).json({msg: error}))
});

// @route   PUT /updateroom
// @desc    update a room
router.put('/updateroom', (req, res) => {
    let updateData = {};
        updateData.room_nr = req.body.room_nr;
        updateData.price = req.body.price;
        updateData.description = req.body.description;
        updateData.facilities = req.body.facilities;
        updateData.picture_name = req.body.picture_name;

    console.log('update req recieved: ' + JSON.stringify(updateData));
    Room.findByIdAndUpdate(req.body.id, {$set: updateData}, {useFindAndModify: false}).catch(
        (error) => res.status(400).json({msg: error})
    );
});

module.exports = router;

