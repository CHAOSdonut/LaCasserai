const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    user: {
      type: String,
      required: true
    },
    room: {
       type: Number,
        required: true
    },
    from_date: {
        type: Date,
        required: true
    },
    till_date: {
        type: Date,
        required: true
    }
});

module.exports = Reservation = mongoose.model('reservation', ReservationSchema);