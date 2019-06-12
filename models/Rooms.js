const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    room_nr: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    facilities: {
        type: [String],
        default: undefined,
        required: true
    },
    picture_name: {
        type: String,
        required: true
    },
});

module.exports = Room = mongoose.model('room', RoomSchema);