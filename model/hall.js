const mongoose = require('mongoose');
const hallscheme = new mongoose.Schema({
    hallName: String,
    seat: Number,
    price: Number,
    amenties: String,
    phn: Number,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    status:{
        default:"none",
        type:String
    }
})

const Hall = mongoose.model('Hall', hallscheme, 'Hall');
module.exports = Hall;