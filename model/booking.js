const mongoose = require('mongoose');
const bookingscheme = new mongoose.Schema({
    customerName: String,
    startDate: Date,
    endDate: Date,
    room: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Booking = mongoose.model('Booking ', bookingscheme, 'Booking ');
module.exports = Booking;